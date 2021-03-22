import { Component, OnInit,  ModuleWithComponentFactories, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-service-requests-detail',
  templateUrl: './service-requests-detail.component.html',
  styleUrls: ['./service-requests-detail.component.css']
})
export class ServiceRequestsDetailComponent implements OnInit {
  adminForm: FormGroup;
  requestNumber: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
      this.requestNumber = this.adminService.adminFormData.requestNumber
      this.adminForm = new FormGroup({
          contractorInformation: new FormGroup({
            lastName: new FormControl(this.adminService.adminFormData.lastName,
              ),
              firstName: new FormControl(this.adminService.adminFormData.firstName,
                ),
              middleInitial: new FormControl(this.adminService.adminFormData.middleInitial,
                ),
              companyName: new FormControl(this.adminService.adminFormData.companyName,
                ),
              companyEmailAddress: new FormControl(this.adminService.adminFormData.companyEmailAddress,
                ),
              companyStreetAddress: new FormControl(this.adminService.adminFormData.companyStreetAddress,
                ),
              city: new FormControl(this.adminService.adminFormData.city,
                ),
              state: new FormControl(this.adminService.adminFormData.state,
                ),
              zipCode: new FormControl(this.adminService.adminFormData.zipCode,
                ),
              phoneNumber: new FormControl(this.adminService.adminFormData.phoneNumber,
                ),
            }),
            countyInformation: new FormGroup({
              contractWorkOrderNumber: new FormControl(this.adminService.adminFormData.contractWorkOrderNumber,
                ),
              contractExpirationDate: new FormControl(this.adminService.adminFormData.contractWorkOrderNumber,
                ),
              countyEmailAddress: new FormControl(this.adminService.adminFormData.countyEmailAddress,
                ),
              phoneNumber: new FormControl(null,
                ),
              departmentName: new FormControl(null,
                ),
              departmentNumber: new FormControl(null,
                ),
              businessStreetAddress: new FormControl(null),
              businessCity: new FormControl(null,
                ),
              businessZipCode: new FormControl(null,
                ),
            }),
            policyRulesInformation: new FormGroup ({
              applyDefaultCountywidePolicyIsChecked: new FormControl(false),
              departmentPolicyRule0IsChecked: new FormControl(false),
              departmentPolicyRule1IsChecked: new FormControl(false),
              departmentPolicyRule2IsChecked: new FormControl(false),
              departmentPolicyRule3IsChecked: new FormControl(false),
              departmentPolicyRule4IsChecked: new FormControl(false),
              socialNetworkingFacebookIsChecked: new FormControl(false),
              socialNetworkingTwitterIsChecked: new FormControl(false),
              socialNetworkingLinkedInIsChecked: new FormControl(false),
              typeOfRegistration: new FormControl(null),
            }),
            accessInformation: new FormGroup ({
              //IBM Data Center Access
              ibmChecked: new FormControl (null,
                ),
              ibmLogonId: new FormControl(null),
              majorGroupCode: new FormControl(null),
              lsoGroupCode: new FormControl(null),
              // Unix Environment Access
              unixChecked: new FormControl (null),
              unixTypeRequest: new FormControl (null),
              unixLogonId: new FormControl(null),
              application: new FormControl(null),
              accessGroup: new FormControl(null),
              accountNumber: new FormControl(null),
              // SecurID Remote Access
              secureidChecked: new FormControl (null),
              billingAccountNumber: new FormControl(null),
              accessType: new FormControl(null),
            }),
            authorizedInformation: new FormGroup ({
              countyDeptName: new FormControl(null,
                 ),
            })
          });

}}
