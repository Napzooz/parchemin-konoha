PARCHEMIN DE KONOHA — VERSION NETLIFY

J'ai préparé une version adaptée à Netlify :
- page publique : parchemin sans texte, sceau et animation horrifique au clic ;
- comptage automatique lors du chargement de la page ;
- page admin privée sur /admin ;
- stockage persistant des statistiques via Netlify Blobs.

CE QU'IL RESTE À FAIRE (nécessaire pour publier sur ton compte)
1. Le moyen le plus simple est de connecter ce dossier à un dépôt GitHub, puis d'importer ce dépôt dans Netlify. Les fonctions serveur doivent être déployées avec le site : un simple glisser-déposer de fichiers statiques ne suffit pas.
2. Dans Netlify > Site configuration > Environment variables, ajoute ADMIN_TOKEN avec un mot de passe long et secret.
3. Redéploie le site.
4. Ouvre https://TON-SITE.netlify.app/admin et saisis le même ADMIN_TOKEN.
5. Ouvre la page publique : le compteur doit augmenter peu après le chargement.

IMPORTANT
- Je ne peux pas me connecter à ton compte Netlify depuis cette conversation ni publier en ton nom.
- Ne partage jamais ADMIN_TOKEN.
- Le comptage des visiteurs est une estimation par navigateur ; effacer les données du navigateur ou changer d'appareil peut créer un nouveau visiteur.
- Ce projet ne déclenche qu'un effet fictif visuel. Aucun poison réel.
