
//
//
// Este archivo contiene configuración de los contenedores 
// y como estos se conectan con sus respectivas bases de datos.
// Intentar no editar

//console.log(import.meta.url)


export default {
    txt: {
        path: './src/contenedores/data/'
    },
    mongoDb : {
        uri: "mongodb://localhost:27017/coderhouse",
        // uri = "mongodb+srv://coderhouse:coderhouse@cluster0.o0eqf.mongodb.net/coderhouse?retryWrites=true&w=majority",
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // serverSelectionTimeoutMS: 5000
        }
    },
    mongoose: {
        stringConexion: 'srv+mongodb://localhost/coderhouse',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            serverSelectionTimeoutMS: 5000
        }
    },
    firebase: {
        type: "service_account",
        project_id: "coder-back-end",
        private_key_id: "6e4a77bfabe8c58ee4895cd6679eaa98aeda31e8",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCosqpboX1BOjGU\nKVSggY2faZBMPvRFh9qONrYheNcfy5T7WYsKjYNjL8XJOc/3p4ffFri6yuEhsPA1\nOyqJRuY0G9TPhdSSrtxwXej/etypKKaUAliFDmkhM7O1929SdTGGA5FesQBbF6wR\nQKgp1sfVtMztMYZaovo0GSH4mudh4LIEnRne35vnrgGHOJPVgMParTC+2MB5qUk1\nY2vcAAL4pHJv6irvZFvNgchK7dtsWpmH7UDsYmx1r12R6oz/YLtXnOB0QcDz51xA\nwA5MYjjJfLV9bN6H1zY3K4CVEgyVTwt+Vqq/nu9mxAcf2N1a+JJoWrJsGTs0G5mj\nNOkTKFOFAgMBAAECggEABE0h6NoyPmKEdxmircD/4munoToNsmQnX27nr+zL12Sy\ndMIwuGEpU3MZYOsXcWIVJcwHg8O+f8RqK4FJsVxcbEG1aGEqLV9GAZtzYGg6jhma\nPbXdme7nIVCXKXGYpgqU66zVnQt4TdpJqdrzLrXqPHmyq+2SVmdHZ+KoKhWRBr7Q\nUjgI7LoejpDTi+q8NaDqCagD0pO7Wr/I4+CRipsIH8ep3tgOHNxM6MavIXeJ1JUl\nRx0QdJF3smUNuIAt3G25GUbEv9vDYnpNEm0DxpSHPGovYqWQ3DEIPXHgLVOXNp9y\nAI2bAaPUWpZopS5QwpnwoQlfafrLEP3BUXDgE0HhNQKBgQDQOAxL3BGkiMvKDi1W\nunRttJZl0vRYaG1L1OkU8MiUYPV/9L78K99S+VJarrYhIbnXcfqjbOx4Dm4qpI3q\nJ0QPgAgw6ayr91esA1krP+y6PcKIVQy2/kwLQS+/UeIgQyBeh/XX05LVLLOx0OSW\njBvTWyAofqogRkyoT2VIrIZq9wKBgQDPaO4VIg0KuOhT2r5P5Mu8jaUyZSSbxpqS\nCMa5GCuGD6w+PPruR1zuUDAOJHb0Vh8rwVP23urOlWgYL2g5WSvpH3PlhoVD1FFA\nSpBfqedZ8HgtVjC8yvosREByfF30QTquzRLpZ7THR+No0/B0oMtmMsNHYkuOK2w7\nwNxqm1c6YwKBgGt48ofZUFXvsdhaFvbUCLJzasml6C8Vv4xLmf8QBUfo/+6KwmVg\ns8WdIO/ji+hwAv98OlVOLIQPVre19fYtTEj/2bp9cn3UjjEgDU9wkFzU8erykzyE\n53VLsTx8JE5ot3VzkeZTs09K4nlejA5UxSwDtgaQ0nkUMA8T5ABt5HejAoGACi8q\n0ZrUbRxbPBLXmXCwmFeULv9MZuG/oUAREfGf4XtPh9bSs3SJmaISWf9sX98CtNFP\nYCXd/brUW6uoQHiicVX8CN8sGAKK4s9Ge4wKMh5eqEs9JWgKFLZdO8HjkyTIzuB+\n9zsCY26iOfl+KxviIOiJMi4fa6GyNNTpfcqW4+UCgYBU4DQt5OIIN7yfMY0FkKGy\n6drZdILkaq/1+kK/3vvTBYY2Gdk5/GuyS5QLrMNKCho625Xc+vRFbJkoGoTWp1dy\nMShuadtUBLmmaKciKEUhMkfu4gfH4ypsIXFAjLffQJ4HuYNWYjdd8kmWzHY7GFQ0\nuC6Yqk0GviCx6buraPeapQ==\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-vo1fs@coder-back-end.iam.gserviceaccount.com",
        client_id: "106057862961348660454",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vo1fs%40coder-back-end.iam.gserviceaccount.com"
    }

}
