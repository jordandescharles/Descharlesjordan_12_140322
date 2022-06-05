export default class MainPerformance {
    
    constructor(data) {
        this._kind = formatDataKind(data)
        this._data = data.data
    }
}
 // reformat data to display 'cardio' instead of '1' etc ...

const formatDataKind = (data) => {
    for (let i = 1; i <= 6; i++) {
        data.data[i - 1].kind = data.kind[i]
      }
 } 

 