const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const checkLoggedIn = (req, res, next) => {
    if (req.url === '/calendar.html' && !loggedInUser) {
        res.redirect('/connexion.html');
    } else {
        next();
    }
};

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

let loggedInUser = null;

function authenticateUser(email, password) {
    return new Promise((resolve, reject) => {
        fs.readFile('users.json', 'utf8', (err, data) => {
            if (err) {
                console.error('Erreur lors de la lecture du fichier users.json:', err);
                reject('Erreur lors de la vérification des informations de connexion');
                return;
            }

            const users = JSON.parse(data).utilisateurs;
            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                resolve(user);
            } else {
                reject('E-mail ou mot de passe incorrect');
            }
        });
    });
}

app.use(checkLoggedIn);

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    authenticateUser(email, password)
        .then(user => {
            console.log('Connexion réussie pour:', user);
            loggedInUser = user;
            res.status(200).json({ message: 'Connexion réussie !', user });
        })
        .catch(error => {
            console.error('Erreur lors de la connexion:', error);
            res.status(401).json({ message: 'Échec de la connexion', error });
        });
});

app.post('/api/logout', (req, res) => {
    loggedInUser = null;
    res.status(200).json({ message: 'Déconnexion réussie !' });
});

app.post('/api/signup', (req, res) => {
    const userData = req.body;
    console.log('Nouvel utilisateur enregistré:', userData);

    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier users.json:', err);
            res.status(500).json({ message: 'Erreur lors de la création du compte' });
            return;
        }

        let users = [];
        if (data) {
            users = JSON.parse(data).utilisateurs;
        }

        const existingUser = users.find(user => user.email === userData.email);
        if (existingUser) {
            res.status(400).json({ message: 'L\'adresse e-mail est déjà utilisée' });
            return;
        }

        users.push(userData);

        fs.writeFile('users.json', JSON.stringify({ utilisateurs: users }, null, 4), err => {
            if (err) {
                console.error('Erreur lors de l\'enregistrement des données utilisateur:', err);
                res.status(500).json({ message: 'Erreur lors de la création du compte' });
            } else {
                console.log('Utilisateur enregistré avec succès:', userData);
                res.status(200).json({ message: 'Utilisateur enregistré avec succès !' });
            }
        });
    });
});

app.post('/api/authorization-request', (req, res) => {
    const { date } = req.body;

    const currentDate = new Date();
    const requestDate = new Date(date);
    if (requestDate < currentDate) {
        return res.status(400).json({ message: 'Impossible de soumettre une demande pour une date passée' });
    }

    fs.readFile('authorization_requests.json', 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            console.error('Erreur lors de la lecture du fichier authorization_requests.json:', err);
            return res.status(500).json({ message: 'Erreur lors de la soumission de la demande' });
        }

        const requests = data ? JSON.parse(data) : [];
        const existingRequest = requests.find(req => new Date(req.date).toDateString() === requestDate.toDateString());
        if (existingRequest) {
            return res.status(400).json({ message: 'Une demande pour cette date a déjà été soumise' });
        }
        requests.push({ date: requestDate });

        fs.writeFile('authorization_requests.json', JSON.stringify(requests, null, 4), err => {
            if (err) {
                console.error('Erreur lors de l\'enregistrement de la demande:', err);
                res.status(500).json({ message: 'Erreur lors de la soumission de la demande' });
            } else {
                console.log('Demande d\'autorisation enregistrée pour la date :', date);
                res.status(200).json({ message: 'Demande d\'autorisation envoyée avec succès' });
            }
        });
    });
});

app.get('/connexion.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'connexion.html'));
});

app.get('/inscription.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'inscription.html'));
});

app.get('/backoffice', (req, res) => {
    if (!loggedInUser || loggedInUser.role !== 'moderator') {
        res.status(403).send('Accès interdit');
        return;
    }
    res.sendFile(path.join(__dirname, 'backoffice.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
