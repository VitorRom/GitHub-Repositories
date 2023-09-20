document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const buttonContainers = document.querySelectorAll(".list-container");
    const listItems = document.querySelectorAll(".container-header-list ul li");
    
    buttonContainers.forEach((container, index) => {
        container.addEventListener('click', (event) => {
            event.preventDefault();
    
            listItems.forEach((item) => {
                item.classList.remove("header-list-active");
            });
    
            listItems[index].classList.add("header-list-active");
        });
    });
    const btnMore = document.querySelector(".btn-more");
    const newRepository = document.querySelector(".new-repository");
    const newRepositoryUl = document.querySelector(".new-repository ul");

    btnMore.addEventListener('click', (event) => {
        event.preventDefault();
        if (newRepository.style.display === 'none' || newRepository.style.display === '') {
            newRepository.style.display = 'block';
            newRepositoryUl.style.marginTop = '10px';
        } else {
            newRepository.style.display = 'none';
        }

        // Impedir a propagação do evento de clique para o documento
        event.stopPropagation();
    });

    // Adicione um ouvinte de eventos de clique ao documento
    document.addEventListener('click', () => {
        newRepository.style.display = 'none';
    });

    const btnCloseSidebar = document.getElementById("close-sidebar-repositories");
    const sidebarRepositories = document.getElementById("sidebar-repositories");
    const overlay = document.querySelector(".overlay");

    sidebarRepositories.style.transform = 'translateX(-100%)'

    const btnOpenSidebar = document.getElementById('img-menu');

    btnOpenSidebar.addEventListener('click', function (event) {
        event.preventDefault()
        sidebarRepositories.style.transform = 'translateX(0%)'
        overlay.style.display = 'block'
        body.classList.add('lock');

    })
    btnCloseSidebar.addEventListener('click', function (event) {
        event.preventDefault();
        sidebarRepositories.style.transform = 'translateX(-100%)'
        body.classList.remove('lock')
        overlay.style.display = 'none'

    });

    overlay.addEventListener('click', function(event){
        event.preventDefault();
        sidebarRepositories.style.transform = 'translateX(-100%)'
        sidebarProfile.style.transform = "translateX(100%)"
        body.classList.remove('lock');
        overlay.style.display = 'none'
    })

    const btnCloseProfileSidebar = document.getElementById("btn-close-profile-sidebar");
    const sidebarProfile = document.getElementById("sidebar-profile");

    sidebarProfile.style.transform = 'translateX(100%)'

    const btnOpenProfileSidebar = document.getElementById('img-user-icon');

    btnCloseProfileSidebar.addEventListener('click', function(event){
        event.preventDefault()
        sidebarProfile.style.transform = "translateX(100%)"
        body.classList.remove('lock');
        overlay.style.display = 'none'
    })

    btnOpenProfileSidebar.addEventListener('click', function(event){
        event.preventDefault()
        sidebarProfile.style.transform = "translateX(0%)"
        body.classList.add('lock');
        overlay.style.display = 'block'

    })
});
