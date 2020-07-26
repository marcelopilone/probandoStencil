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

  render() {
    const jsonApi = [ 
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
    var ids = [];
    for (let i = 0; i < jsonApi.length; i++) {
      ids.push(jsonApi[i].title)
    }
    console.log(ids);
    return(
        <div>
          <p class="rojo">{this.nombre}</p>
          <p class="azul">{this.apellido}</p>
          <p class="azul">{this.hacerSuma(1,5)}</p>
          {ids.map((value, index) => {
            return <p>{value}</p>
          })}
        </div>
    );

  }
}
