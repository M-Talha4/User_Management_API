const users = [
    {
        id: '20e2f420-1b14-4ed9-9a23-892fd9664515',
        name: 'Alexis Dooley',
        email: 'Raul45@hotmail.com',
        password: '$2b$10$ko3pwGIy11l6w88hpvshY.LA.XBPgK5UUet3csjWtod3TPaIS/Sni'
    },
    {
        id: 'eaea8221-8611-4cec-9f5d-a7696864717a',
        name: 'Mr. Jesus Schamberger',
        email: 'Nya28@hotmail.com',
        password: '$2b$10$2Q1p8oG9t4jzLVQeV01zieY4uAz.oEK/VQOPblMXHXTs3y6b.gP86'
    },
    {
        id: 'c7672cce-4d2f-48e2-904a-06514a736c35',
        name: 'Kevin Russel',
        email: 'Felicia.Ruecker@hotmail.com',
        password: '$2b$10$i6G7x2hS4xAB6fjnE8DGq..7fH0vRzGYBtdGrNvIQg.uv8Gmamk.e'
    },
    {
        id: '1f9af2fc-81a5-4ea7-ac1d-ef5a0aa321e6',
        name: 'Glenda Hilpert',
        email: 'Maci92@hotmail.com',
        password: '$2b$10$XsJC0gTe48iYJ1hqXXwq1.Cv56P8d6uMOxnfoa5rhWtVrcs0rStKO'
    },
    {
        id: 'ea502178-3d7f-4b34-970a-97beaf70b209',
        name: 'Anne Bernier',
        email: 'Elenora.Walsh@hotmail.com',
        password: '$2b$10$b4L1D6DFFlY0uBz2vpYXEOWWvIscGPEE/H0sJv6G5wth8kKlmgb3.'
    },
    {
        id: 'b5d420cb-fffc-4340-b9c9-a67d3721b65b',
        name: 'Clyde Shields',
        email: 'Alexane_Rosenbaum@hotmail.com',
        password: '$2b$10$y3Yaw5jykK0xl4zqOfROi.42PWhfrhEirxyBDEsEQqOxwkomxFXGq'
    },
    {
        id: '533fb9e6-766f-44b3-969d-99c9163c4c00',
        name: 'Mabel Schmitt',
        email: 'Marcos_Williamson-Gutmann@gmail.com',
        password: '$2b$10$5IupN/LuuoxBjFk76ivDgeZDxUCMdhonsps4q8FyCRJ/5h5LwVp6e'
    },
    {
        id: '5342d8e1-2252-469a-81df-758d58575edc',
        name: 'Colin Corkery',
        email: 'Savanah_Mitchell@gmail.com',
        password: '$2b$10$cCC.qjChrlQe95lD9cgh4OnPKxDANavnaeUGFUtgZbeiuLE/YKYde'
    },
    {
        id: '18ea2a63-8624-4915-a75c-34698ec107f3',
        name: 'Evan Beahan IV',
        email: 'Brian.Yost@hotmail.com',
        password: '$2b$10$u0pmo3mBeV9RcIQ7d3ijoO3UsIk..tlawAodQ8epLbDjTAczXm2qG'
    },
    {
        id: '81bbc2b4-dad4-4713-8dda-52e1ba988b59',
        name: 'Edwin Walter',
        email: 'Brandi25@gmail.com',
        password: '$2b$10$4domc/3tPQa/xoYNfbFLHOPC9Al4nv10wfY481TmxAnzLrTPW82uW'
    },
    {
        id: 'd9c7b81f-85fa-4768-8df0-5b80c1c6c168',
        name: 'Maurice Christiansen',
        email: 'Keon75@hotmail.com',
        password: '$2b$10$4vnrhxzZp.qhFr62LncizOz8GkHsDAdiSj0BGn2Tl6CYiK9S9/sUK'
    },
    {
        id: '3df17275-2cf8-453d-85ec-5e584a6b2d55',
        name: 'Mr. Troy Lemke',
        email: 'Gage.Osinski@gmail.com',
        password: '$2b$10$1U/Yt7WM1vqAB/vb0dG/EecjY4pbKAn2ur5VmqSGrE1EAHp7Ip3Ai'
    },
    {
        id: '3c1d0b1d-edc1-4929-88f6-40bfff9faa8b',
        name: 'Glenn Dickinson',
        email: 'King.Purdy98@gmail.com',
        password: '$2b$10$6odUuSd9xyCTIP99379NbuVZcgSqGxTB4j.RnLjKfIe0VAPVXjEO6'
    },
    {
        id: '4b8772b5-1456-4792-8c43-53118501fb6d',
        name: 'Rochelle Roberts',
        email: 'Maximillian_Bechtelar8@yahoo.com',
        password: '$2b$10$4qWN7R1klaXnXAZwrrFIlehuOaoes9F0VA5EhJNrZl1SMCNmBoR3O'
    },
    {
        id: '34c3b208-6e52-477b-8555-80514ad9a65e',
        name: 'Dorothy McDermott',
        email: 'Eloise_Rath@hotmail.com',
        password: '$2b$10$n54rDFTJtMhTkFmDHbqoyeYz3FfNxF4lFcZwbc7RgKi1lMTGhlXTK'
    },
    {
        id: '8e40a767-3e36-475d-93e7-b61812193b64',
        name: 'Neal Purdy',
        email: 'Victor4@yahoo.com',
        password: '$2b$10$nZPwP6aGlfVQ5iUWdbfWpOmHlD/B3O0ptAASW12f/V5uPUQ8qixuO'
    },
    {
        id: 'd041ca96-2bea-4523-9bc3-49b74bfde422',
        name: 'Tomas Monahan',
        email: 'Jazmyn93@hotmail.com',
        password: '$2b$10$TfFbDqTjyHaF01CfmwZqtulw4eMmalDugr98NYc5GIA6.NncWMRYa'
    },
    {
        id: '6b70ec37-995d-4580-bdfa-32fca636c17b',
        name: "Marianne O'Connell III",
        email: 'Estella.Wolf54@hotmail.com',
        password: '$2b$10$FKLuL2sG5pk4dpYTvRZ16eQp02jpIJX.8BIA46tXYkH1RMexokkDG'
    },
    {
        id: '6a7fedbf-11a7-454b-8cb5-25d2a2dfee67',
        name: 'Arturo Lakin',
        email: 'Berneice_Schaden@hotmail.com',
        password: '$2b$10$yNebfK1LQ1LSVrNCwSLOUeQxrkDVZXpOde.meV34TjVuoQ9R/R3XS'
    },
    {
        id: '3df02088-1f81-4539-9660-f47b8b6d7544',
        name: 'Wade Okuneva',
        email: 'Josiane_VonRueden@hotmail.com',
        password: '$2b$10$NYAXkMwALAy4RBVJwFrZt.ep0rhVHF.I0z23VtXA.2nieceNC9k5a'
    },
    {
        id: 'fa6e03b9-15f8-414e-9e5f-09bd8d0394d9',
        name: 'Wilson King',
        email: 'Toy.Bogisich54@gmail.com',
        password: '$2b$10$VdkZpCGQQ5WCrLcHYm5m7eVZrBqMmJNFXgB8s9L.lshrbho98QqoW'
    },
    {
        id: '09d422be-5567-439d-8183-8e5e13693077',
        name: 'Byron Jenkins',
        email: 'Abel.Ullrich51@gmail.com',
        password: '$2b$10$GOgGnQXOVvKuZ9Vl97aAUu/KMhwh7MTCSOfIMafE68k.vQeroSX3C'
    },
    {
        id: 'c7bdee60-a093-4e7c-af2e-61ea04d376f7',
        name: 'Preston Ward',
        email: 'Laney_Lehner-Donnelly18@gmail.com',
        password: '$2b$10$273zBx/CRUzhw1igkZQTk.tupI1KRJ6cMt8J0nv6TCOryustaT09O'
    },
    {
        id: '9adb5f5d-9331-41c5-9ad2-b379a3d49485',
        name: 'May Ziemann',
        email: 'Declan_Morar@hotmail.com',
        password: '$2b$10$qwT8S00jg9b0tQhTQ4qn9O.J7.ovMWU5pIBhY0VeAD4R7HhBDmCt.'
    },
    {
        id: 'ddcf1c9e-b1b6-4b22-b027-54bdd7739db6',
        name: 'Mercedes Stark',
        email: 'Oswald_Nolan@hotmail.com',
        password: '$2b$10$h3mxE.u2lXIUr7bX9WtK8.jgmUU3piZ9HbzOmi6MXaH2gy6gZpTTS'
    },
    {
        id: '15e9b5ae-1029-435c-9562-dc84ac8f2714',
        name: 'Rolando Bartoletti',
        email: 'Cassandra.Windler@yahoo.com',
        password: '$2b$10$LpwBIFwfNtmhaLvZEmUiWOI.Q0tZV405Jz2fit5fuZyYsXRvgoTU.'
    },
    {
        id: 'e6e773bf-9f3e-4dcf-811b-07e22c863c0e',
        name: 'Isabel Lebsack IV',
        email: 'Zoila53@gmail.com',
        password: '$2b$10$ps7j/W7W2Fb86rQNhjd54.LzrwuHWrXYVP89glh/uJwCfK3qWIwEq'
    },
    {
        id: '98d3e625-fa50-4cf2-ac7b-ec1a7fb1fec8',
        name: 'Ms. Patti McKenzie',
        email: 'Jaydon_Ruecker@yahoo.com',
        password: '$2b$10$G5RWGlc2EfSuhfxMMf/GU.GpPtUSbjp9wZ2L9oQbkipACfrBthhhy'
    },
    {
        id: 'c955070c-6079-4f13-bd97-1e71c2f411c1',
        name: 'Amber Beier',
        email: 'Adelia_Ritchie95@yahoo.com',
        password: '$2b$10$LTiBZtZv.NKmG6.NMGFEqeLOymySM7Lbi6NM9q.T1xPENyLQFwfLa'
    },
    {
        id: "b45970be-e167-489e-b41e-53d7c988b92d",
        name: "Aaron King",
        email: "Mac_Reynolds@gmail.com",
        password: "$2b$10$inbpUBlkixfYk5WDTx0Ph.RocQ6BU6KMnng/WQVKY4id6nkPI.kEO"
    }
];

module.exports = users;