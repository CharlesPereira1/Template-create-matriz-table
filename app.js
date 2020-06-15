// document.getElementById("myAnchor").href = "https://www.w3schools.com";
// document.getElementById("myAnchor").target = "_blank";

function linha() {
  let h1 = window.document.getElementById("h1");
  let res = window.document.getElementById("res");
  let res2 = window.document.getElementById("res2");
  let linha = window.document.getElementById("linha");

  // let p0 = window.document.getElementsByTagName("span")[0];
  // let p1 = window.document.getElementsByTagName("span")[1];
  // let p2 = window.document.getElementsByTagName("span")[2];
  // let p3 = window.document.getElementsByTagName("span")[3];
  // let p4 = window.document.getElementsByTagName("span")[4];
  // let p5 = window.document.getElementsByTagName("span")[5];
  // let p6 = window.document.getElementsByTagName("span")[6];

  let linha1 = Number(linha.value);
  for (let l = 2; l <= linha1; l++) {
    res.innerHTML += `<li><tr>
    <td>
      {{mesAno_${l}}}
    </td>
    <td>
      {{fatura_${l}}}
    </td>
    <td>
      {{valorExato_${l}}}
    </td>
    <td>
      {{dataVencimento_${l}}}
    </td>
    <td>
      {{diasAtraso_${l}}}
    </td>
    <td>
      {{valorAtualizado_${l}}}
    </td>
    <td>
      {{linhaDigitavel_${l}}}
    </td>
  </tr></li>`;
    // p0.innerText += ` {{fatura_${l}}}`;
    // }
    // res.innerText += `
    // res.innerHTML += `
    //     <tr>
    //       <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
    //           {{mesAno_${l}}}
    //       </td>
    //       <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
    //           {{fatura_${l}}}
    //       </td>
    //       <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
    //           {{valorExato_${l}}}
    //       </td>
    //       <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
    //           {{dataVencimento_${l}}}
    //       </td>
    //       <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
    //           {{diasAtraso_${l}}}
    //       </td>
    //       <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
    //           {{valorAtualizado_${l}}}
    //       </td>
    //       <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
    //           {{linhaDigitavel_${l}}}
    //       </td>
    //     </tr>
    //   `;
    // // res2.innerText += `
    res2.innerHTML += `<li>
      <tr>
        <td >
          {{pgMesAno_${l}}}
        </td>
        <td >
          {{pgFatura_${l}}}
        </td>
        <td >
          {{pgValorExato_${l}}}
        </td>
        <td >
          {{pgValorPago_${l}}}
        </td>
        <td >
          {{pgDataPagamento_${l}}}
        </td>
        <td >
          {{pgDiasAtraso_${l}}}
        </td>
        <td >
          {{pgPeriodo_${l}}}
        </td>
      </tr></li>
    `;
  }
  h1.innerHTML = `INADIMPLENCIA_ACUMULADO_AMIL_2_${linha1}`;
  linha.value = "";
}

function clear1() {
  let res = window.document.getElementById("res");
  let res2 = window.document.getElementById("res2");
  let h1 = window.document.getElementById("h1");
  res.innerText = "";
  res2.innerText = "";
  h1.innerHTML = "INADIMPLENCIA_ACUMULADO_AMIL_2";
}
