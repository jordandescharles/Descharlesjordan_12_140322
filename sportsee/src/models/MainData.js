
export default class MainData {
    constructor(data) {
        this._userInfos = data.userInfos
        this._todayScore = ScoreAjust(data.todayScore)
        this._keyData = data.keyData
    }
 }
 
const ScoreAjust = (data) =>{
//    retourne un entier
data *=100
      return data
}