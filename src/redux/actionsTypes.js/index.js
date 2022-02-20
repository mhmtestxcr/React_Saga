
import * as count from './counterActions';
import * as todo from './todoListActions';
import * as user from './userActions'


const actionTypes = {
    count,
    todo,
    user,
}

export default actionTypes;

// büyük çaplı uyugulamalr için index sayfası oluşturuldu 
// counter ve todolistin actionytplerı yazıldı
// action typenin görevi herhangi bir durumu tetiklemek