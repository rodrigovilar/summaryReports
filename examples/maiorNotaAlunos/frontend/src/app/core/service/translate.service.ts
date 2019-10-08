import { Injectable, OnInit } from '@angular/core';

import { TranslateService as NgxTranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslateService implements OnInit {
  constructor(private translate: NgxTranslateService) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.setLang();
  }

  public setLang(lang: any = null): void {
    lang = lang ? lang : localStorage.getItem('lang');
    if (!lang) {
      lang = this.translate.getBrowserLang();
    }
    this.translate.use(lang.match(/en|pt/) ? lang : 'en');
    this.saveLang(lang);
  }

  public getLang() {
    const lang = localStorage.getItem('lang');
    if (lang) {
      return lang;
    }
    return this.translate.getBrowserLang();
  }

  protected saveLang(lang: any): void {
    localStorage.setItem('lang', String(lang));
  }
}
