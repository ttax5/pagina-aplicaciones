function tomarHora() {
    const d = new Date();
    let hour = d.getHours();

    document.documentElement.classList.remove('transitional');
    document.documentElement.classList.remove('night');
    document.documentElement.classList.remove('she');
    document.documentElement.classList.remove('he');
    document.documentElement.classList.remove('it');


    if (hour >= 19) {
        document.documentElement.classList.add('night');
        document.documentElement.classList.add('she');
        document.documentElement.classList.add('he');
        document.documentElement.classList.add('it');
        return;
    }
}
tomarHora();