export const displayModal = () => {
    document.getElementById('modal-wrapper').classList.add('modal-wrapper');
    document.getElementById('modal').classList.add('modal');
};

export const close = () => {
    document.getElementsByClassName('modal-wrapper')[0].classList.remove('modal-wrapper');
    document.getElementsByClassName('modal')[0].classList.remove('modal');
};