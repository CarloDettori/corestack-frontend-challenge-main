# CoreStack – Frontend Challenge

## ⚠️ Aggiornamento
Questa è la versione aggiornata della challenge.

Se hai già iniziato una versione precedente, puoi:
- continuare con quella  
- oppure passare alla versione aggiornata  

Entrambe verranno valutate.

---

## 🎯 Obiettivo

Questa challenge serve per valutare il tuo livello reale come frontend developer.

Non è un test da “passare”, ma uno strumento per osservare:

- come affronti un problema  
- come prendi decisioni  
- come strutturi una soluzione  

---

## ⚙️ Contesto

Stai lavorando su una piccola feature di un prodotto che gestisce contenuti.

Hai accesso a una API pubblica, ma:
- alcuni aspetti non sono completamente definiti  
- non tutto è specificato nel dettaglio  

Come in un contesto reale, dovrai gestire ambiguità e prendere decisioni.

---

## 🧠 Approccio richiesto

Non è necessario completare tutto.

È più importante:
- capire cosa fare  
- decidere cosa NON fare  
- motivare le scelte  

Se qualcosa non è chiaro, puoi fare assunzioni: esplicitarle è parte della valutazione.

La capacità di prioritizzare e gestire ambiguità è parte centrale della challenge.

---

## 🚀 Come partecipare

1. Fai fork della repository  
2. Lavora sulla tua copia  
3. Completa la challenge  
4. Invia il link della tua repo GitHub  

---

## 🧪 Task

Costruisci una piccola applicazione per lavorare con una lista di post.

📌 Nota importante

Non conta solo che le funzionalità siano presenti.

Verrà valutato anche come vengono integrate nell’esperienza complessiva dell’applicazione, considerando:

- chiarezza del flusso
- usabilità delle interazioni
- coerenza dell’esperienza finale

Una soluzione tecnicamente funzionante ma poco rifinita lato UX sarà quindi valutata di conseguenza. 

### 1. Dati da API
Recupera i dati da:
https://jsonplaceholder.typicode.com/posts

---

### 2. Visualizzazione
Mostra i dati nel modo che ritieni più utile.

Puoi scegliere liberamente:
- struttura (lista, card, ecc.)
- organizzazione
- eventuale paginazione o raggruppamento

---

### 3. Aggiunta contenuti
Permetti all’utente di aggiungere un nuovo post tramite un form.

Puoi:
- simulare la POST  
- oppure gestire i dati localmente  

---

### 4. Gestione stato
Gestisci:
- loading durante il fetch  
- errori (es. API non disponibile)  

---

### 5. Validazione
Il form deve gestire:
- input vuoti  
- feedback all’utente  

---

### 6. Comportamento extra (facoltativo)
Implementa almeno una tra queste:
- filtro dei post  
- ordinamento  
- gestione di molti elementi (UX/performance)  

Scegli tu cosa ha più senso.

---

## 🧠 Prima di iniziare (importante)

Scrivi brevemente (3–5 righe):

- cosa faresti per primo  
- cosa ritieni più importante  
- eventuali dubbi o ambiguità  

Non serve essere esaustivi: ci interessa il tuo processo di ragionamento.

---

## 🧠 README finale

Nel README (breve), spiega in modo sintetico:

- cosa hai deciso di fare e perché  
- cosa NON hai fatto e perché  
- eventuali compromessi  
- cosa miglioreresti con più tempo  

Non è richiesta una documentazione lunga: poche righe chiare sono sufficienti.

---

## ⚙️ Stack

React è suggerito.

Puoi comunque utilizzare qualsiasi tecnologia frontend con cui ti senti a tuo agio.

La valutazione non si basa sulla tecnologia scelta, ma su come affronti il problema e sulle decisioni che prendi.

---

## ⏱️ Tempo

Tempo stimato per una soluzione base funzionante: 45–60 minuti.

È normale dedicare più tempo per rifinire ulteriormente UX, struttura o dettagli implementativi.

Non è necessario completare tutto perfettamente.

---

## 📦 Output

Invia:
- link alla repository GitHub  
- codice funzionante  

---

## 🧠 Valutazione

Riceverai un feedback strutturato su:

- gestione API  
- state management  
- form & validazione  
- qualità del codice  
- UX  
- capacità decisionale  

La valutazione tiene conto sia dell’esecuzione tecnica che del modo in cui prendi decisioni.

---

## 💬 Feedback

Dopo la challenge potrai lasciare un feedback su:
- difficoltà  
- chiarezza  
- realismo rispetto a un colloquio frontend  

---

## 🚀 CoreStack

Questa challenge è parte della beta di CoreStack.

L’obiettivo è rendere la valutazione tecnica:

- più aderente al lavoro reale  
- meno basata sul CV  
- più utile sia per developer che per aziende  


## 🚀 briefing before starting

### 1

#### Brainstorming 1
Per prima cosa creo 2 pagine:
1 Una home page contenente la spegazione all'utente riguardo lo scopo e il funzionamento dell'app.
2 Una pagina di visualizzazione dei post senza filtri ne logiche di riordinamento. 
Una volta che ho la pagina di visualizzazione dei post prendo i dati dall'API e ne controllo il contenuto
In seguto vado a costruire i componenti UI per un riutilizzo facile e veloce degli stessi ma comunque adeguto alla struttura dei dati ottenuti.
Infine nella pagina di visualizzazione dei post vado ad iserire i post stessi utilizzando i componenti UI creati precedentemente.
Per ora lascerei in sospeso il form per creare nuovi post, la validazione del form stesso e l'integrazione delle funzionalita facoltative

### Brainstorming 2
Ho completato gli step espressi nel brainstorming 1 tuttavia sforando di circa 20 min (orario d'inizio 15:28 orario di fine 16:50 + 20 min per la scrittura del feedback finale nel file readme).
interrompo qui lo svolgimento della challangeper rispettare le direttive temporali espresse nel file readme.

### Cosa ho fatto
Mi sono principalmente dedicato alla visualizzazione dei post in se tralasciando il form perche ho preferito concentrarmi su una sola funzionalità dell'app in modo da non lasciare nulla a metà (sarebbe stato brutto non avere una pagina di spiegazione per l'utente e due pagine di cui una non terminata, avrebbero potuto confondere un utente inesperto o far storcere il naso ad uno esperto) in questo modo l'app è coerente con se stessa senza funzionalità incomplete

### Cosa non ho fatto
Ho tralasciato tutte le funzionalita che non riguardavano la visualizzazione dei post, inoltre non ho implementato alcun accorgimanto estetico per ottimizzare il tempo a disposizione

### Compromessi
Ho utilizzato uno scafolding di react gia pronto creato da me e ho usato anche dei componeti UI gia pronti anch'essi creati da me.
ho usato anche tailwind CSS per una gestione piu veloce dello styling

### Cosa farei con piu tempo
I porssimi passi, come gia specificato, saranno: la gestionne dello stato attualmente assente, la creazione del form per l'utente con relativa validazione, integrazione dei task facoltativi ed infine un miglioramento estetico piu uno responsive.