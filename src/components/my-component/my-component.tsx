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
  @Prop() nombre: string;

  @Prop() apellido: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Prop() name: string = "";

  @Prop() elJson: string = "";

  @Prop() claseRojo: string = "rojo";

  

  hacerSuma( paramUno,paramDos ){
    let resultadoFinal = paramUno+paramDos;
      if( resultadoFinal > 5 ){
        resultadoFinal = resultadoFinal+' numero grande papa';
      }
      return resultadoFinal;
  }

  ocultando(event: UIEvent) {
    if( this.claseRojo == 'rojo' ){
      this.claseRojo = this.claseRojo = this.claseRojo+" seOculta";
    }else{
      this.claseRojo = 'rojo';
    }
    return this.claseRojo;
  }

  mostrarJson(){
    return [ 
        {
            "id": 1,
            "title": "El Marcelito re loco",
            "content": "jajaja",
            "date": "12-04-2017",
        },
        {
            "id": 2,
            "title": "La pachanga",
            "content": "jejeje",
            "date": "1-28-2018",
        }
    ];
  }

  /*async mostrarJson(){
    const response = await fetch("http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-24&sortBy=publishedAt&apiKey=60a3422a1902418f89de619e7778294c");
    const jsonApi = await response.json();
    console.log(jsonApi);
    for (let i = 0; i < jsonApi['articles'].length; i++) {
        console.log(jsonApi['articles'][i].author);
    }
  }*/

  render() {
    const jsonApi = this.mostrarJson();
    let ids = [];
    for (let i = 0; i < jsonApi.length; i++) {
      ids.push(jsonApi[i].title)
    }
    return(
        <div>
          <p id="nombresito" class={this.claseRojo}>{this.nombre}</p>
          <p class="azul">{this.apellido}</p>
          <p class="azul">{this.hacerSuma(1,5)}</p>
          {ids.map((value, index) => {
            return <p>{value}</p>
          })}
          <button onClick={this.ocultando.bind(this)}>Ocultar!</button>
        </div>
    );

  }
}
