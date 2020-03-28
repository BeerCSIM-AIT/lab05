import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ToursProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToursProvider {
  data : any;
  constructor(public http: HttpClient) {
    this.data=[{
      id:1,
      type:"ทะเล",
      name:"เกาะล้าน",
      detail:"เกาะล้าน จังหวัด.......",
      image: "https://mpics.mgronline.com/pics/Images/562000004762701.JPEG",
    },
    {
      id:2,
      type:"ภูเขา",
      name:"ภูกระดึง",
      detail:"ภูกระดึง จังหวัดเลย",
      image: "https://img.kapook.com/u/2019/Tanapol/travel/august/phukadeung/p7.jpg",
    },
    {
      id:3,
      type:"วัด",
      name:"ดอยสุเทพ",
      detail:"ดอยสุเทพ จังหวัดเชียงใหม่",
      image: "https://www.terrabkk.com/wp-content/uploads/2014/09/Doysuthep.jpg",
    }];
  }
  loadAll(){
    return Promise.resolve(this.data);
  }
  loadById(placeId:any){
    // for(var i=0;i<(this.data).length;i++){
    //   if(this.data[i].id == id){
    //     return Promise.resolve(this.data[i]);
    //   }
    // }
    let place = this.data.find( ({id}) => id===placeId );
    return Promise.resolve(place);
  }
}
