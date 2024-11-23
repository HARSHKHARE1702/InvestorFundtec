const investmentForm = document.getElementById('investment-form');
const withdrawalForm = document.getElementById('withdrawal-form');
const investmentTableBody = document.querySelector('#investment-table tbody');
const withdrawalTableBody = document.querySelector('#withdrawal-table tbody');
const totalInvestmentsEl = document.getElementById('total-investments');
const totalWithdrawalsEl = document.getElementById('total-withdrawals');
const netBalanceEl = document.getElementById('net-balance');

let totalInvestments = 0;
let totalWithdrawals = 0;

// Handle Investment Form Submission
investmentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('invest-amount').value);
    const date = document.getElementById('invest-date').value;

    if (amount > 0 && date) {
        totalInvestments += amount;

        addRowToTable(investmentTableBody, amount, date);
        updateSummary();
    }
    investmentForm.reset();
});

// Handle Withdrawal Form Submission
withdrawalForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    const date = document.getElementById('withdraw-date').value;

    if (amount > 0 && date) {
        totalWithdrawals += amount;

        addRowToTable(withdrawalTableBody, amount, date);
        updateSummary();
    }
    withdrawalForm.reset();
});

// Add a row to a table
function addRowToTable(tableBody, amount, date) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>$${amount.toFixed(2)}</td>
        <td>${new Date(date).toLocaleDateString()}</td>
    `;
    tableBody.appendChild(row);
}

// Update Summary
function updateSummary() {
    const netBalance = totalInvestments - totalWithdrawals;

    totalInvestmentsEl.textContent = `$${totalInvestments.toFixed(2)}`;
    totalWithdrawalsEl.textContent = `$${totalWithdrawals.toFixed(2)}`;
    netBalanceEl.textContent = `$${netBalance.toFixed(2)}`;
}
