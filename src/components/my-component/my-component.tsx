import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Prop() name: string = 'hola';

  

  retornarNombre(): string {
    return this.name;
  }

  hacerSuma( paramUno,paramDos ){
    let resultadoFinal = paramUno+paramDos;
      if( resultadoFinal > 5 ){
        resultadoFinal = resultadoFinal+' numero grande papa';
      }
      return resultadoFinal;
  }

  async mostrarJson(){
    const response = await fetch("http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-24&sortBy=publishedAt&apiKey=60a3422a1902418f89de619e7778294c");
    const jsonApi = await response.json();
    console.log(jsonApi);
    for (let i = 0; i < jsonApi['articles'].length; i++) {
        console.log(jsonApi['articles'][i].author);
    }
  }
 

  render() {
    return(
        <div>
          <p class="rojo">{this.retornarNombre()}</p>
          <p class="azul">{this.retornarNombre()}</p>
          <p class="azul">{this.hacerSuma(1,5)}</p>
          <p>{this.mostrarJson()}</p>
        </div>

    );
  }
}
