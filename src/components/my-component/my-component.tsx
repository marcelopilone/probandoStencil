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

  

  hacerSuma( paramUno,paramDos ){
    let resultadoFinal = paramUno+paramDos;
      if( resultadoFinal > 5 ){
        resultadoFinal = resultadoFinal+' numero grande papa';
      }
      return resultadoFinal;
  }

  /*async mostrarJson(){
    const jaja = [ 
        {
            "id": 1,
            "title": "Hello World",
            "content": "Try Reactjs is awesome. Can't wait to learn more",
            "date": "12-04-2017",
            "slug": "hello-world"
        },
        {
            "id": 2,
            "title": "Setup React",
            "content": "Setting up react is easy. Learn more about it!",
            "date": "1-28-2018",
            "slug": "setup-react"
        }
    ];
    const jsonApi = await jaja;
    var ids = [];
    for (let i = 0; i < jsonApi.length; i++) {
      ids.push(jsonApi[i].title)
    }
    console.log(ids[0]);
    return ids[0];

  }
 
  todos = this.mostrarJson();*/

  render() {
    return(
        <div>
          <p class="rojo">{this.nombre}</p>
          <p class="azul">{this.apellido}</p>
          <p class="azul">{this.hacerSuma(1,5)}</p>
        </div>
    );
  }
}
