import { Component }       from '@angular/core';
import { CodersPage }      from '../coders/coders';
import { CodersInDbPage }  from '../coders-in-db/coders-in-db';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CodersPage;
  tab2Root = 'CodersInDbPage';

  constructor() {}
}
