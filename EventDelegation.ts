export function addTableEventListener(tableId: string) {
  const table = document.getElementById(tableId);
  table?.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'TD') {
          alert(`Cell clicked: ${target.textContent}`);
      }
  });
}

export function addRow(tableId: string) {
  const table = document.getElementById(tableId) as HTMLTableElement;
  const row = table.insertRow();
  row.insertCell(0).textContent = "New Row";
  row.insertCell(1).textContent = "Click Me";
}

export function deleteRow(tableId: string) {
  const table = document.getElementById(tableId) as HTMLTableElement;
  if (table.rows.length > 1) {
      table.deleteRow(-1);
  }
}
