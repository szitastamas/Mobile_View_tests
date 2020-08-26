document.addEventListener('DOMContentLoaded', () => {

	const botInitObject = {
        widgetType: "standAlone",
        botSecret:  "8cff67c2-8371-4465-a7e9-a9b8f8bb7217", //"ed2a5865-4a2b-423b-880e-ace8ad7766ff", "8cff67c2-8371-4465-a7e9-a9b8f8bb7217", 
        typeItStringArray: ["z.B. Wer bist du?", "z.B. Was kannst du für mich tun?", "Frag mich einfach!"],
        language: "de-DE"
    }
    
    // Rename: StandAlone
    const minimalBotInitObject = {
        widgetType: "standAlone", // halfScreenWidget, tinyWidget, standAlone,
        botSecret: "8cff67c2-8371-4465-a7e9-a9b8f8bb7217",
        language: "de-DE"
    }
    
    Lailo.init(minimalBotInitObject);
});