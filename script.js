const gamecontainer = document.querySelectore(" .conatiner "),
userResult = document.querySelectore(".user_result img "),
cpuResult = document.querySelectore(".cpu_result img "),
result = document.querySelectore(".result"),
OptionImages = document.querySelectoreAll(".option_image");

OptionImages.forEach((image,index) => {
    image.addEventListener("click",(e) => {
        image.classList.add("active");
    
        userResult.src = cpuResult.src ="https://i.pinimg.com/236x/1d/55/0d/1d550dcd1947633c00ec4b249e698164.jpg"
        result.textcontent = "Wait..."
        OptionImages.forEach((image2,index2) =>{
            index!== index2 && image2.classList.remove("active");
        });
        gamecontainer.classList.add("start")
        
        let time = setTimeout(() =>{
            
            gamecontainer.classList.remove("start")
        },2500)
        let imagSrc = e.target.querySelector("img").src;
        userResult.src = imagSrc
            
        let randomNumber = Math.floor(Math.random() * 3);
        
        let cpuImages = ["https://i.pinimg.com/236x/1d/55/0d/1d550dcd1947633c00ec4b249e698164.jpg", "https://i.pinimg.com/236x/d7/8f/2f/d78f2f11ffdba744827729633f6c08f2.jpg", "https://i.pinimg.com/236x/b5/1a/e4/b51ae4be9cbbf5cad588a6ad27dcc246.jpg"]
        cpuResult.src = cpuImages[randomNumber];

        let cpuValue = ["R","P","S"][randomNumber]
        let userValue = ["R","P","S"][index]

        let outcomes = {
            RR:"Draw",
            RP:"Cpu",
            RS:"User",
            PP:"Draw",
            PR: "Cpu",
            PS:"User",
            Ss:"Draw",
            SR:"Cpu",
            SP:" User",
        };

        let outcomesValue = outcomes[userValue+ cpuValue];

        result.textcontent = userValue === cpuValue ? "Match Draw" :${outcomesValue} Won!! `;
        console.log(outcomeValue)
        
    
    });
});