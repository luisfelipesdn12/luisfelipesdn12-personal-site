export const HERO = {
    ENGLISH : {
        greeting : "Hello, I'm Luis Felipe!",
        sentence : 'I\'m a computer science student and I can code for: automations, websites, machine learning, APIs and data science. My main languages are <span class="text-blue-700 font-semibold">Python</span>, <span class="text-blue-700 font-semibold">Java</span> and <span class="text-blue-700 font-semibold">Go</span>.'
    },
    PORTUGUESE : {
        greeting : "Olá, eu sou o Luis Felipe!",
        sentence : 'Sou um estudante de ciência da computação e posso desenvolver: automações, sites, machine learning, APIs e data science. Minhas principais linguagens de programação são <span class="text-blue-700 font-semibold">Python</span>, <span class="text-blue-700 font-semibold">Java</span> e <span class="text-blue-700 font-semibold">Go</span>.'
    }
};

export const LANGUAGES = {
    ENGLISH : {
        title : "Languages",
        description : "Programming languages I can develop. Click in the language to see my repositories with it.",
        unorderedList : [
            {
                name : "Python",
                iDoWith : "Automation, data science, graphic interface.",
                image : "../assets/python.png"  
            },
            {
                name : "Java",
                iDoWith : "Backend development, REST APIs.",
                image : "../assets/java.png"
            },
            {
                name : "Go",
                iDoWith : "Servers, automation, backend development, REST APIs.",
                image : "../assets/golang.png"
            },
            {
                name : "HTML",
                iDoWith : "Web sites, integrations with CSS libraries.",
                image : "../assets/html-5.png"
            },
            {
                name : "JavaScript",
                iDoWith : "API consume, dynamic content in HTML.",
                image : "../assets/javascript.png"
            },
            {
                name : "C/C++",
                iDoWith : "Competitive programming, Arduino, embedded systems.",
                image : "../assets/c-plus-plus-logo.png"
            }
        ]
    },
    PORTUGUESE : {
        title : "Linguagens",
        description : "Linguagens de programação em que poso desenvolver. Clique na linguagem para ver meus repositórios com ela.",
        unorderedList : [
            {
                name : "Python",
                iDoWith : "Automação, data science, interfaces gráficas.",
                image : "../assets/python.png"  
            },
            {
                name : "Java",
                iDoWith : "Desenvolvimento backend, APIs REST. ",
                image : "../assets/java.png"
            },
            {
                name : "Go",
                iDoWith : "Servidores, automação, desenvolvimento backend, APIs REST.",
                image : "../assets/golang.png"
            },
            {
                name : "HTML",
                iDoWith : "Sites, integrações com bibliotecas CSS.",
                image : "../assets/html-5.png"
            },
            {
                name : "JavaScript",
                iDoWith : "Consumo de APIs, conteúdo dinâmico em HTML.",
                image : "../assets/javascript.png"
            },
            {
                name : "C/C++",
                iDoWith : "Programação competitiva, Arduino, sistemas embarcados.",
                image : "../assets/c-plus-plus-logo.png"
            }
        ]
    }
};

export const PROJECTS = {
    ENGLISH : {
        title : "Projects",
        description : "My knowledge applied in personal projects. Click in the project to see more.",
        unorderedList : [
            {
                image : "../assets/prime-numbers.jpg",
                name : "Infinite prime numbers generator",
                description : "Algorithm to generate prime numbers infinitely, using iterations, arrays and divisibility tests. I\'ve made a YouTube video explain the logic.",
                href : "https://github.com/luisfelipesdn12/Numeros-Primos/"
            },
            {
                image : "../assets/where-the-office.png",
                name : "Where Am I In The Office",
                description : "A website that shows my progress when watching The Office series. Created with the purpose of showing my friends how much they can give me spoilers :)",
                href : "https://github.com/luisfelipesdn12/where-am-i-in-the-office"
            },
            {
                image : "../assets/pytosis_demo.gif",
                name : "Pytosis Simulator",
                description : "A simple simulator to the cell's reproduction using Python and Pygame.",
                href : "https://github.com/luisfelipesdn12/pytosis-simulator"
            },
            {
                image : "../assets/wca-comp-alert.png",
                name : "WCA Competitions Alert",
                description : "A script which send an e-mail when there's a new WCA competition. Integrates the WCA's and the Google Sheets API, the subscription is made by the Google Forms.",
                href : "https://github.com/luisfelipesdn12/Alerta-de-Campeonatos-WCA"
            },
            {
                image : "../assets/trabalhos-escolares-automaticos.jpg",
                name : "Automatic schoolwork",
                description : "A program that, from a subject, extracts content from Wikipedia, summarizes and adds images, then formats and exports a document in the form of schoolwork.",
                href : "https://github.com/luisfelipesdn12/trabalhos-escolares-automaticos"
            },
            {
                image : "../assets/gihub-demo.jpg",
                name : "See more!",
                description : "Explore all my projects in my GitHub profile.",
                href : "https://github.com/luisfelipesdn12"
            }
        ]
    },
    PORTUGUESE : {
        title : "Projetos",
        description : "Meus conhecimentos aplicados em projetos pessoais. Clique no projeto para ver mais.",
        unorderedList : [
            {
                image : "../assets/prime-numbers.jpg",
                name : "Gerador infinito de números primos",
                description : "Agoritimo para gerar números primos infinitamente, usando iterações, arrays e testes de divisibilidade. Eu fiz um vídeo no YouTube explicando a lógica.",
                href : "https://github.com/luisfelipesdn12/Numeros-Primos/"
            },
            {
                image : "../assets/where-the-office.png",
                name : "Onde Estou Em The Office",
                description : "Um site que mostra meu progresso ao assistir a série The Office. Criado com a proposta de mostrar aos meus amigos o quanto eles podem me dar spoilers :)",
                href : "https://github.com/luisfelipesdn12/where-am-i-in-the-office"
            },
            {
                image : "../assets/pytosis_demo.gif",
                name : "Pytosis Simulator",
                description : "Um simulador simples da reprodução celular, utilizando Python e Pygame.",
                href : "https://github.com/luisfelipesdn12/pytosis-simulator"
            },
            {
                image : "../assets/wca-comp-alert.png",
                name : "Alerta de Campeonatos WCA",
                description : "Um script que envia um e-mail quando há uma nova competição da WCA. Integra as APIs da WCA e a do Planilhas Google, a inscrição é feita pelo Formulários Google.",
                href : "https://github.com/luisfelipesdn12/Alerta-de-Campeonatos-WCA"
            },
            {
                image : "../assets/trabalhos-escolares-automaticos.jpg",
                name : "Trabalhos Escolares Automáticos",
                description : "Um programa que, a partir de um assunto, extrai conteúdo da Wikipedia, resume e adiciona imagens, depois formata e exporta um documento em forma de trabalho escolar.",
                href : "https://github.com/luisfelipesdn12/trabalhos-escolares-automaticos"
            },
            {
                image : "../assets/gihub-demo.jpg",
                name : "Veja mais!",
                description : "Explore todos os meus projetos no meu perfil do GitHub!",
                href : "https://github.com/luisfelipesdn12"
            }
        ]
    }
};

export const EDUCATION = {
    ENGLISH : {
        title : "Education",
        description : "My background in formal education, in addition to technologies courses and studies of interest.",
        unorderedList : [
            {
                image: "../assets/education/python-curso-em-video.jpg",
                name: "Python 3 Course",
                description: "Created by Prof. Gustavo Guanabara to \"Curso em Vídeo\", it shows from basics concepts to errors handling with the Python programming language.",
                institution: "Curso em Vídeo",
                hours: 120,
                href: "https://www.cursoemvideo.com/cursos/"
            },
            
            {
                image: "../assets/education/backend.jpg",
                name: "Backend Developer Course",
                description: "A full backend course. Showing Git Flow, Systems Architecture, Java, Spring Boot, testing, best practices with SQL, SCRUM, JavaScript ES6, Node.js with Express, best practices with API's and laws about data security.",
                institution: "Digital Innovation One",
                hours: 100,
                href: "https://certificates.digitalinnovation.one/6CB93EFF"
            },
            {
                image: "../assets/education/golang.jpg",
                name: "Golang Course",
                description: "Brazilian version made by Ellen Körbes of a course originally made by Todd McLeod. It shows all the advantages of using the Go Programming Language, fundamental concepts and best practices to code in Go.",
                institution: "Aprenda Go - Ellen Körbes",
                hours: 22,
                href: "https://www.youtube.com/playlist?list=PLCKpcjBB_VlBsxJ9IseNxFllf-UFEXOdg"
            },
            {
                image: "../assets/education/high-school.jpg",
                name: "High School",
                description: "Brazilian High School. Subjects as Portuguese Language, Mathematics, Chemistry, Sociology, Arts, Physics, English Language, Geography, Philosophy, Biology, etc.",
                institution: "State of Sao Paulo",
                hours: "1050 of 3150",
                href: "https://inova.educacao.sp.gov.br/"
            }
        ]
    },
    PORTUGUESE : {
        title : "Educação",
        description : "Minha formação em educação formal, além de cursos de tecnologia e estudos de interesse.",
        unorderedList : [
            {
                image: "../assets/education/python-curso-em-video.jpg",
                name: "Curso de Python 3",
                description: "Criado pelo Prof. Gustavo Guanabara para o \"Curso em Vídeo\", aborda desde conceitos básicos até tratamento de erros com a linguagem de programação Python.",
                institution: "Curso em Vídeo",
                hours: 120,
                href: "https://www.cursoemvideo.com/cursos/"
            },
            
            {
                image: "../assets/education/backend.jpg",
                name: "Curso Backend Developer",
                description: "Um curso de back-end completo. Abordando Git Flow, Arquitetura de Sistemas, Java, Spring Boot, testes, melhores práticas com SQL, SCRUM, JavaScript ES6, Node.js com Express, melhores práticas com API's e leis sobre segurança de dados.",
                institution: "Digital Innovation One",
                hours: 100,
                href: "https://certificates.digitalinnovation.one/6CB93EFF"
            },
            {
                image: "../assets/education/golang.jpg",
                name: "Curso Golang",
                description: "Versão brasileira feita por Ellen Körbes do curso originalmente feito por Todd McLeod. O curso aborda todas as vantagens de usar a Linguagem de Programação Go, conceitos fundamentais e boas práticas para desenvolver em Go.",
                institution: "Aprenda Go - Ellen Körbes",
                hours: 22,
                href: "https://www.youtube.com/playlist?list=PLCKpcjBB_VlBsxJ9IseNxFllf-UFEXOdg"
            },
            {
                image: "../assets/education/high-school.jpg",
                name: "Ensino Médio",
                description: "Ensino Médio Brasileiro. Disciplinas como Língua Portuguesa, Matemática, Química, Sociologia, Artes, Física, Língua Inglesa, Geografia, Filosofia, Biologia, etc.",
                institution: "Estado de São Paulo",
                hours: "1050 de 3150",
                href: "https://inova.educacao.sp.gov.br/"
            }
        ]
    }
};

export const FOOTER = {
    ENGLISH : "Developed with HTML, CSS and JavaScript by ",
    PORTUGUESE : "Desenvolvido com HTML, CSS e JavaScript por "
};
