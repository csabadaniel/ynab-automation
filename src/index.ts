import 'dotenv/config';
import * as ynab from 'ynab';

const accessToken = process.env.YNAB_ACCESS_TOKEN!;
const ynabAPI = new ynab.API(accessToken);

async function fetchDefaultBudget() {
  try {
    const budgetsResponse = await ynabAPI.budgets.getBudgets();
    const defaultBudget = budgetsResponse.data.budgets[0];
    
    console.log(JSON.stringify(budgetsResponse, null, 2));
  } catch (error) {
    console.error('Error fetching budgets:', error);
  }
}

fetchDefaultBudget();
