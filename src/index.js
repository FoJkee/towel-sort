// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    } else {
        return matrix
            .map((elem, index) => {
                return index % 2 != 0 ? elem.reverse() : elem;
            })
            .flat();
    }
};
