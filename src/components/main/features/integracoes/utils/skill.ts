interface skill {
    url: string;
    description: string;
    name: string;
    details: string
}

export const skills: skill[] = [
    {
        url: "https://cdn.icon-icons.com/icons2/923/PNG/96/telegram_icon-icons.com_72055.png",
        description: "ChatBots no telegram personalizados conforme suas necessidades!",
        name: "Telegram",
        details: "https://telegram.org/"
    },
    {
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
        description: "Testes end-to-end web automatizados com Selenium webdriver",
        name: "Selenium",
        details: "https://www.selenium.dev/documentation/webdriver/"
    },
    {
        url: "https://cdn.icon-icons.com/icons2/836/PNG/96/Trello_icon-icons.com_66775.png",
        description: "Utilização do trello, para atualizações em tempo real do andamento do projeto",
        name: "Trello",
        details: "https://trello.com/"
    },
    {
        url: "https://cdn.icon-icons.com/icons2/3914/PNG/512/pix_logo_icon_248846.png",
        description: "Integrações com a API do PIX para complementar seu sistema de pagamento!",
        name: "Pix",
        details: "https://www.bcb.gov.br/estabilidadefinanceira/pix"
    }
]