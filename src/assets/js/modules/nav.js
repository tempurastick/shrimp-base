// Nav

class NavigationMenuPlugin {
    constructor(){
        // can be refactored to be reusable later by turning them into parameters 
    const navSelector = document.querySelector('[data-nav-toggle="selector"]');
    const navContainer = document.querySelector('[data-nav-toggle="container"]');

    navSelector.addEventListener("click", function() {
            navContainer.style.visibility = ((navContainer.style.visibility!='hidden') ? 'hidden' : 'visible');
            navContainer.style.display = ((navContainer.style.display!='none') ? 'none' : 'grid');
    })

    }

    

}

export { NavigationMenuPlugin };