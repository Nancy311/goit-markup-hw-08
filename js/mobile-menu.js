		const openMenuBtn = document.querySelector('.menu-open-btn');
		const closeMenuBtn= document.querySelector('.menu-close-btn');
		const menu= document.querySelector('.menu-container');
		const body= document.querySelector('body');
        
            const toggleMenu = ()=> {
		menu.classList.toggle('is-hidden');
		// body.classList.toggle('no-scroll');  
	}

    openMenuBtn.addEventListener('click', toggleMenu);
	closeMenuBtn.addEventListener('click', toggleMenu);


// (() => {
// 	const refs = {
// 		openMenuBtn: document.querySelector('.menu-open-btn'),
// 		closeMenuBtn: document.querySelector('.menu-close-btn'),
// 		menu: document.querySelector('.menu-container'),
// 		body: document.querySelector('body'),
// 	};

// 	refs.openMenuBtn.addEventListener('click', toggleMenu);
// 	refs.closeMenuBtn.addEventListener('click', toggleMenu);

// 	function toggleMenu() {
// 		refs.menu.classList.toggle('is-hidden');
// 		refs.body.classList.toggle('no-scroll');
// 	}
// })();
