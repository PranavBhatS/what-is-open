import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  monthlyIncome = "1000000"
  monthlyExpenses = "500000";
  repaymentTenuredList = ["1 Year", "6 Months", "3 Months"];

  featureList: Feature[] = [{
    description: "Get terms loans that your business needs within 72 hrs",
    title: "Quick cash disbursement",
    imgUrl: "assets/images/get-paid.png"
  }, {
    description: "Achieve your financial goals with an amazing interest rate starting at 13% per annum",
    title: "Low-interest rate",
    imgUrl: "assets/images/low-interest-rate.png"
  }, {
    description: "Manage banking, accounting & everything in between, on one platform",
    title: "Ace your business finances",
    imgUrl: "assets/images/freelance.png"
  }, {
    description: "Get started instantly by submitting only your basic details & bank statements",
    title: "Zero Paperwork",
    imgUrl: "assets/images/secure-payments.png"
  }, {
    description: "Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh",
    title: "Loans to fight COVID-19",
    imgUrl: "assets/images/Covid.png"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}

interface Feature {
  imgUrl: string;
  title: string;
  description: string;
}
