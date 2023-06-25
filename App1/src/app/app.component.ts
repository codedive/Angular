import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serviceData: {
    firstName?: any,
    lastName?: string,
    street?: string,
    number?: string,
    postCode?: string,
    location?: string,
    email?: string,
    phone?: string,
    problemDefinition?: string,
    costCeiling?: number,
    bikeTypeId?: number,
    brandId?: number,
    optedForStandardService?: boolean,
    standardServiceId?: number,
    isElectricDriveExist?: boolean
  }

  public forecasts?: WeatherForecast[];

  public brands?: Brand[];

  public bikeTypes?: BikeType[];

  public standardServices?: StandardService[];

  public servicePackages?: ServicePackage[];

  currentStep = 1;

  constructor(private http: HttpClient) {

    this.serviceData = {};
    http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));


    http.get<BikeType[]>('https://localhost:7052/biketype').subscribe(result => {
      this.bikeTypes = result;
    }, error => console.error(error));


    http.get<Brand[]>('https://localhost:7052/brand').subscribe(result => {
      this.brands = result;
    }, error => console.error(error));


    http.get<StandardService[]>('https://localhost:7052/standardservice').subscribe(result => {
      this.standardServices = result;
    }, error => console.error(error));


    http.get<ServicePackage[]>('https://localhost:7052/servicepackage').subscribe(result => {
      this.servicePackages = result;
    }, error => console.error(error));
  }

  title = 'angularapp';



  submit() {
    var val = {
      firstName: this.serviceData.firstName,
      lastName: this.serviceData.lastName,
      street: this.serviceData.street,
      number: this.serviceData.number,
      postCode: this.serviceData.postCode,
      location: this.serviceData.location,
      email: this.serviceData.email,
      phone: this.serviceData.phone,
      problemDefinition: this.serviceData.problemDefinition,
      costCeiling: this.serviceData.costCeiling,
      bikeTypeId: this.serviceData.bikeTypeId,
      brandId: this.serviceData.brandId,
      optedForStandardService: this.serviceData.optedForStandardService,
      standardServiceId: this.serviceData.standardServiceId,
      isElectricDriveExist: this.serviceData.isElectricDriveExist
    };
    console.log(val);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    //return this.http.post<any>('https://localhost:7052/servicedata/add', val, httpOptions);
  }

  SecondStep() {
    this.currentStep = 2;
  }

  ThirdStep() {
    this.currentStep = 3;
  }

  FourthStep() {
    this.currentStep = 4;
  }

  FifthStep() {
    this.currentStep = 5;
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}


interface Brand {
  BrandId: number;
  Name: string;
}

interface BikeType {
  BikeTypeId: number;
  Name: string;
}

interface StandardService {
  StandardServiceId: number;
  Name: string;
}

interface ServicePackage {
  ServicePackageId: number;
  Name: string;
}
