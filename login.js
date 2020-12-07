exports.login = (usuario, contra) => {
    if (usuario == 'admin' && contra == 'admin') {
        return true;
    }
    return false;
}