import { HomePage } from './home.po';
import { ListaPage } from './lista.po';

describe('workspace-project Home', () => {
  let homePage: HomePage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('should display "Angular" in h1', () => {
    homePage.navigateTo();
    expect(homePage.getTitleText()).toContain('Angular');
  });

  it('should display "CAS" in footer', () => {
    homePage.navigateTo();
    expect(homePage.getFooterText()).toContain('CAS');
  });


});

describe('Tareas', ()=>{
  let listaPage: ListaPage;

  beforeEach(() => {
    listaPage = new ListaPage();
  });

  it('should display "Proyecto" in h1', () => {
    listaPage.navigateTo();
    expect(listaPage.getTitleText()).toContain('Proyecto');
  });
  
  it('should display "Getafe" in footer', () => {
    listaPage.navigateTo();
    expect(listaPage.getFooterText()).toContain('CAS');
  });
})

