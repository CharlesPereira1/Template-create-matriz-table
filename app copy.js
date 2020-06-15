function linha() {
  let h1 = window.document.getElementById("h1");
  let res = window.document.getElementById("res");
  let res2 = window.document.getElementById("res2");
  let linha = window.document.getElementById("linha");

  let linha1 = Number(linha.value);
  for (let l = 2; l <= linha1; l++) {
    // res.innerText += `
    res.innerHTML += `
        <tr>
          <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
              {{mesAno_${l}}}
          </td>
          <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
              {{fatura_${l}}}
          </td>
          <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
              {{valorExato_${l}}}
          </td>
          <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
              {{dataVencimento_${l}}}
          </td>
          <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
              {{diasAtraso_${l}}}
          </td>
          <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
              {{valorAtualizado_${l}}}
          </td>
          <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
              {{linhaDigitavel_${l}}}
          </td>
        </tr>
      `;
    // res2.innerText += `
    res2.innerHTML += `
        <tr>
          <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
            {{pgMesAno_${l}}}
          </td>
          <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
            {{pgFatura_${l}}}
          </td>
          <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
            {{pgValorExato_${l}}}
          </td>
          <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
            {{pgValorPago_${l}}}
          </td>
          <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
            {{pgDataPagamento_${l}}}
          </td>
          <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
            {{pgDiasAtraso_${l}}}
          </td>
          <td align="center" style="padding: 10px; background-color: #f3f3f3; color: rgb(112, 111, 111); font-family: Verdana, Geneva, sans-serif; font-size: 11px; border: .1px solid rgb(112, 111, 111);">
            {{pgPeriodo_${l}}}
          </td>
        </tr>
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
