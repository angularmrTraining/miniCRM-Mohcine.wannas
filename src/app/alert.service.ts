import { Injectable } from '@angular/core';

import { default as swal, SweetAlertType, SweetAlertOptions } from 'sweetalert2';

@Injectable()
export class AlertService {

  constructor() { }

  error(text = 'Une erreur est survenue, Merci de réessayer plus tard') {

    const option: SweetAlertOptions = {
      title: 'Erreur !',
      text: text,
      type: 'error',
      confirmButtonText: 'Ok !'
    };
    swal(option);

  }

  success(title = 'Succes', text = '') {

    const option: SweetAlertOptions = {
      title: title,
      text: text,
      timer: 3000,
      type: 'success',
      confirmButtonText: 'Ok !'
    };
    swal(option)
      .then(() => { });

  }

  serverError() {

    const option: SweetAlertOptions = {
      title: 'เกิดข้อผิดพลาด',
      text: 'เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์',
      type: 'error',
      confirmButtonText: 'ตกลง'
    };
    swal(option);

  }

  confirm(text = 'Êtes vous sûr ?', ) {
    const option: SweetAlertOptions = {
      title: 'Attention ! ',
      text: text,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#62a420',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Je suis sûr !',
      cancelButtonText: 'Annulé'
    };
     return swal(option);
  }
}
