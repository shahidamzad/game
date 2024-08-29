document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const refreshButton = document.getElementById('refreshButton');
    const status = document.getElementById('status');

    function createCards() {
        
        container.innerHTML = '';
        status.textContent = ''; 

        
        let colors = Array(8).fill('green').concat('red');
        
        colors = colors.sort(() => Math.random() - 0.5);

        for (let i = 0; i < 9; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML =`
                <div class="card-inner">
                    <div class="card-front">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Solid_grey.svg/2048px-Solid_grey.svg.png" alt="Card Image">
                    </div>
                    <div class="card-back ${colors[i] === 'red' ? 'red' : ''}">
                        <img src="https://imgs.search.brave.com/uIDi6k_hwxUcdw62euUq4HFdduqmnuK_X3F6eRv2ngI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NC9EaWFtb25kLVBO/Ry1QaWN0dXJlLnBu/Zw" alt="">
                    </div>
                </div>
            `;
            container.appendChild(card);

            
            card.addEventListener('click', () => {
                card.classList.add('flip');

                setTimeout(() => {
                    const isRed = card.querySelector('.card-back').classList.contains('red');
                    if (isRed) {
                        status.textContent = 'Game Over! Refreshing...';
                        setTimeout(createCards, 1000); 
                    } else {
                        status.textContent = 'This card is green.';
                    }
                }, 600); 
            });
        }
    }

 
    createCards();

    
    refreshButton.addEventListener('click', createCards);
});
