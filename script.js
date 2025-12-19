document.addEventListener('DOMContentLoaded', function() {
    const presentes = ['Cartão feito à mão', 'Top', 'Saia'];
    
    const presentBoxes = document.querySelectorAll('.present-box');
    const resultSection = document.getElementById('result');
    const presentResult = document.getElementById('present-result');
    const newPresentBtn = document.getElementById('new-present');
    const timerDisplay = document.getElementById('timer-display'); 

    presentBoxes.forEach(box => {
        box.textContent = '???';
        box.style.backgroundColor = '#f1f1f1'; 
    });

    presentBoxes.forEach((box, index) => {
        box.addEventListener('click', function() {
            presentResult.textContent = `Você ganhou: ${presentes[index]}`;
            
            resultSection.style.display = 'block';

            document.querySelector('.present-options').style.display = 'none';

            newPresentBtn.disabled = true;

            startTimer(24 * 60 * 60); 
        });
    });

    function startTimer(seconds) {
        let remainingTime = seconds;
        const interval = setInterval(function() {
            remainingTime--;

            const hours = Math.floor(remainingTime / 3600);
            const minutes = Math.floor((remainingTime % 3600) / 60);
            const secondsLeft = remainingTime % 60;

            timerDisplay.textContent = `Tempo restante: ${hours}h ${minutes}m ${secondsLeft}s`;

            if (remainingTime <= 0) {
                clearInterval(interval);
                newPresentBtn.disabled = false; 
                timerDisplay.textContent = "Você pode escolher um novo presente agora!";
            }
        }, 1000);
    }

    newPresentBtn.addEventListener('click', function() {
        resultSection.style.display = 'none';
        
        document.querySelector('.present-options').style.display = 'flex';

        presentBoxes.forEach(box => {
            box.textContent = '???';
            box.style.backgroundColor = '#f1f1f1';
        });

        timerDisplay.textContent = '';
        newPresentBtn.disabled = false; 
    });
});

