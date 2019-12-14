declare module '@impartner/api' {
  export namespace prmObjects {
    export interface Deal {
      accounts?: string;
      amount?: number;
      closeDate?: string;
      company?: Company;
      contacts?: string;
      created?: string;
      createdBy?: AppUser;
      stage?: DealStage;
      id: number;
      updatedBy?: AppUser;
      name: string;
      primaryAccount?: Account;
      primaryContact?: Contact;
      probability?: number;
      products?: string;
      recordLink?: string;
      recordVersion?: number;
      stageUpdated?: string;
      source?: string;
      updated?: string;
    }
    export interface Company {
      annualRevenue?: number;
      autoAssignRegion?: boolean;
      contacts?: string;
      created?: string;
      createdBy?: AppUser;
      fax?: string;
      id: number;
      industry?: string;
      updatedBy?: AppUser;
      mailingCity?: string;
      mailingCountry?: string;
      mailingPostalCode?: string;
      mailingState?: string;
      mailingStreet?: string;
      mailingSuite?: string;
      name: string;
      numberOfEmployees?: number;
      phone?: string;
      recordLink?: string;
      recordVersion?: number;
      region?: Region;
      updated?: string;
      website?: string;
    }
    export interface Region {
      created?: string;
      createdBy?: AppUser;
      description?: string;
      id: number;
      isRecalculating?: boolean;
      language?: Language;
      updatedBy?: AppUser;
      locations?: string;
      name: string;
      owner?: Administrator;
      recordCount?: number;
      recordLink?: string;
      recordVersion?: number;
      updated?: string;
    }
    export interface Language {
      displayOrder?: number;
      id: number;
      isDefault?: boolean;
      localeCode?: string;
      name: string;
      recordLink?: string;
    }
    export interface Administrator {
      comments?: string;
      created?: string;
      createdBy?: AppUser;
      email: string;
      emailDomain?: string;
      firstName: string;
      name?: string;
      hasTemporaryPassword?: boolean;
      id: number;
      isActive?: boolean;
      lastAgreementIPAddress?: string;
      lastAgreementTimeStamp?: string;
      lastAgreementVersion?: string;
      lastLoginTimeStamp?: string;
      lastLoginIPAddress?: string;
      lastName: string;
      lastPasswordResetRequest?: string;
      updatedBy?: AppUser;
      password?: string;
      passwordQuestion?: PasswordRecoveryQuestion;
      recordLink?: string;
      recordVersion?: number;
      role: AdministratorRole;
      temporaryPassword?: string;
      updated?: string;
      userName: string;
    }
    export interface PasswordRecoveryQuestion {
      displayOrder?: number;
      id?: number;
      name?: string;
      recordLink?: string;
    }
    export interface AdministratorRole {
      id?: number;
      name?: string;
      recordLink?: string;
    }
    export interface AppUser {
      comments?: string;
      created?: string;
      createdBy?: AppUser;
      email: string;
      emailDomain?: string;
      firstName: string;
      name?: string;
      hasTemporaryPassword?: boolean;
      id: number;
      isActive?: boolean;
      lastAgreementIPAddress?: string;
      lastAgreementTimeStamp?: string;
      lastAgreementVersion?: string;
      lastLoginTimeStamp?: string;
      lastLoginIPAddress?: string;
      lastName: string;
      lastPasswordResetRequest?: string;
      updatedBy?: AppUser;
      password?: string;
      passwordQuestion?: PasswordRecoveryQuestion;
      recordLink?: string;
      recordVersion?: number;
      temporaryPassword?: string;
      updated?: string;
      userName: string;
    }
    export interface DealStage {
      category?: string;
      displayOrder?: number;
      id?: number;
      isDefault?: boolean;
      name?: string;
      recordLink?: string;
      probability?: string;
    }
    export interface Account {
      site?: string;
      accounts?: string;
      faxAlternate?: string;
      phoneAlternate?: string;
      autoAssignTier?: boolean;
      autoAssignRegion?: boolean;
      comments?: string;
      convertedApplicant?: Applicant;
      created?: string;
      createdBy?: AppUser;
      cRMAccountType?: string;
      crmId?: string;
      crmHash?: string;
      deals?: string;
      partnerLocator?: boolean;
      externalId1?: string;
      externalId2?: string;
      fax?: string;
      id: number;
      isActive?: boolean;
      isTest?: boolean;
      crmLastKnownDateUpdated?: string;
      crmLastImported?: string;
      crmLastExported?: string;
      updatedBy?: AppUser;
      crmLastExportedVersion?: number;
      mailingCity?: string;
      mailingCountry?: string;
      mailingLatitude?: string;
      mailingLongitude?: string;
      mailingPostalCode?: string;
      mailingState?: string;
      mailingStreet?: string;
      mailingSuite?: string;
      memberCount?: number;
      name: string;
      parentAccount?: Account;
      partnerLevel: PartnerLevel;
      phone?: string;
      primaryUser?: User;
      recordLink?: string;
      recordVersion?: number;
      region?: Region;
      solutions?: string;
      tier?: Tier;
      updated?: string;
      users?: string;
      website?: string;
    }
    export interface Applicant {
      accountCity?: string;
      accountCountry?: string;
      accountExternalId1?: string;
      accountExternalId2?: string;
      accountFax?: string;
      accountPhone?: string;
      accountPostalCode?: string;
      accountState?: string;
      accountStreet?: string;
      accountSuite?: string;
      accountWebsite?: string;
      address1__cf?: string;
      address2__cf?: string;
      adjudicatedBy?: Administrator;
      adjudicatorName?: string;
      account?: Account;
      approvalStatus?: ApplicantApprovalStatus;
      approveToExistingAccount?: boolean;
      autoAssignRegion?: boolean;
      city__cf?: string;
      comapny__cf?: string;
      comments?: string;
      company?: string;
      country__cf?: string;
      created?: string;
      createdBy?: AppUser;
      dateAdjudicated?: string;
      accountPartnerLocator?: boolean;
      memberPartnerLocator?: boolean;
      email?: string;
      email__cf?: string;
      firstName: string;
      firstName__cf?: string;
      name?: string;
      id: number;
      isDenied?: boolean;
      title?: string;
      language?: string;
      lastName: string;
      updatedBy?: AppUser;
      lastName__cf?: string;
      member?: User;
      memberCity?: string;
      memberCountry?: string;
      memberExternalId1?: string;
      memberExternalId2?: string;
      memberFax?: string;
      memberMobile?: string;
      memberPhone?: string;
      memberPostalCode?: string;
      memberState?: string;
      memberStreet?: string;
      memberSuite?: string;
      memberWebsite?: string;
      phone__cf?: string;
      qualifiedName?: string;
      reasonDenied?: string;
      reasonDeniedDetail?: string;
      receiveEmail?: boolean;
      receivePostalMail?: boolean;
      recordLink?: string;
      recordVersion?: number;
      region?: Region;
      accountLevel?: PartnerLevel;
      salutation?: string;
      source?: string;
      state__cf?: string;
      title__cf?: string;
      updated?: string;
      userName: string;
      zip__cf?: string;
    }
    export interface ApplicantApprovalStatus {
      description?: string;
      displayOrder?: number;
      id?: number;
      isApproved?: boolean;
      isDefault?: boolean;
      isDenied?: boolean;
      isPending?: boolean;
      name?: string;
      recordLink?: string;
    }
    export interface PartnerLevel {
      apiName?: string;
      displayOrder?: number;
      id?: number;
      name?: string;
      recordCount?: number;
      recordLink?: string;
    }
    export interface User {
      account: Account;
      accountName?: string;
      address1__cf?: string;
      address2__cf?: string;
      autoAssignRegion?: boolean;
      city__cf?: string;
      cobrandedDocuments?: string;
      comapny__cf?: string;
      comments?: string;
      convertedApplicant?: Applicant;
      country__cf?: string;
      created?: string;
      createdBy?: AppUser;
      crmId?: string;
      crmHash?: string;
      deals?: string;
      partnerLocator?: boolean;
      email: string;
      email__cf?: string;
      emailDomain?: string;
      externalId1?: string;
      externalId2?: string;
      fax?: string;
      firstName: string;
      firstName__cf?: string;
      name?: string;
      hasTemporaryPassword?: boolean;
      id: number;
      isActiveDerived?: boolean;
      isActive?: boolean;
      isPrimaryMember?: boolean;
      isTestDerived?: boolean;
      isTest?: boolean;
      title?: string;
      language?: string;
      lastAgreementIPAddress?: string;
      lastAgreementTimeStamp?: string;
      lastAgreementVersion?: string;
      crmLastKnownDateUpdated?: string;
      lastLoginTimeStamp?: string;
      lastLoginIPAddress?: string;
      lastName: string;
      lastPasswordResetRequest?: string;
      crmLastImported?: string;
      crmLastExported?: string;
      updatedBy?: AppUser;
      crmLastExportedVersion?: number;
      lastName__cf?: string;
      mailingCity?: string;
      mailingCountry?: string;
      mailingLatitude?: string;
      mailingLongitude?: string;
      mailingPostalCode?: string;
      mailingState?: string;
      mailingStreet?: string;
      mailingSuite?: string;
      mobile?: string;
      opportunities?: string;
      password?: string;
      passwordQuestion?: PasswordRecoveryQuestion;
      phone?: string;
      phone__cf?: string;
      receiveEmail?: boolean;
      receivePostalMail?: boolean;
      recordLink?: string;
      recordVersion?: number;
      region?: Region;
      salutation?: string;
      state__cf?: string;
      temporaryPassword?: string;
      title__cf?: string;
      updated?: string;
      userName: string;
      website?: string;
      zip__cf?: string;
    }
    export interface Tier {
      accounts?: string;
      created?: string;
      createdBy?: AppUser;
      criteriaAsHtml?: string;
      description?: string;
      id: number;
      isActive?: boolean;
      updatedBy?: AppUser;
      name: string;
      rank?: number;
      recordCount?: number;
      recordLink?: string;
      recordVersion?: number;
      group?: TierGroup;
      updated?: string;
    }
    export interface TierGroup {
      created?: string;
      createdBy?: AppUser;
      description?: string;
      id: number;
      isActive?: boolean;
      updatedBy?: AppUser;
      name: string;
      partnerLevels?: string;
      recordLink?: string;
      recordVersion?: number;
      regions?: string;
      tiers?: string;
      updated?: string;
    }
    export interface Contact {
      company: Company;
      created?: string;
      createdBy?: AppUser;
      deals?: string;
      email?: string;
      firstName?: string;
      name?: string;
      id: number;
      title?: string;
      lastName?: string;
      updatedBy?: AppUser;
      mailingCity?: string;
      mailingCountry?: string;
      mailingPostalCode?: string;
      mailingState?: string;
      mailingStreet?: string;
      mailingSuite?: string;
      mobile?: string;
      phone?: string;
      recordLink?: string;
      recordVersion?: number;
      salutation?: string;
      updated?: string;
    }
    export interface Opportunity {
      approvalStatus?: string;
      comments?: string;
      companyPhone?: string;
      competitiveProducts?: string;
      competitiveProductsOther?: string;
      salesStage?: OpportunitySalesStage;
      contactedByLocalRep?: boolean;
      created?: string;
      createdBy?: AppUser;
      dateApprovedDenied?: string;
      dateClosed?: string;
      dateExpires?: string;
      dateOfLikelyClose?: string;
      dateOfSalesCall?: string;
      department?: string;
      phone?: string;
      distributor?: string;
      distributorOther?: string;
      email?: string;
      endUserCompany?: string;
      externalId1?: string;
      externalId2?: string;
      fax?: string;
      firstName?: string;
      homePhone?: string;
      id: number;
      title?: string;
      jointSalesCall?: boolean;
      lastName?: string;
      updatedBy?: AppUser;
      mailingCity?: string;
      mailingCountry?: string;
      mailingState?: string;
      mailingStreet?: string;
      mailingSuite?: string;
      mobile?: string;
      name: string;
      dollarValue?: string;
      opportunityStatus?: string;
      otherPhone?: string;
      owner: User;
      mailingPostalCode?: string;
      products?: string;
      reasonDenied?: string;
      reasonDeniedDetail?: string;
      reasonForLoss?: string;
      reasonForLossDetail?: string;
      recordLink?: string;
      recordVersion?: number;
      salesExecCompany?: string;
      salutation?: string;
      suffix?: string;
      updated?: string;
      website?: string;
    }
    export interface OpportunitySalesStage {
      displayOrder?: number;
      id?: number;
      name?: string;
      recordLink?: string;
      value?: string;
    }
    export interface Sale {
      billToAccount?: Account;
      billToAddress1?: string;
      billToAddress2?: string;
      billToCity?: string;
      billToCountry?: string;
      billToName?: string;
      billToState?: string;
      billToZip?: string;
      created?: string;
      createdBy?: AppUser;
      externalBillToId?: string;
      externalCustomerId?: string;
      externalShipToId?: string;
      id: number;
      invoiceDate?: string;
      name: string;
      updatedBy?: AppUser;
      products?: string;
      recordLink?: string;
      recordVersion?: number;
      shipToAccount?: Account;
      shipToAddress1?: string;
      shipToAddress2?: string;
      shipToCity?: string;
      shipToCountry?: string;
      shipToName?: string;
      shipToState?: string;
      shipToZip?: string;
      sourceAccount?: Account;
      updated?: string;
    }
  }
}
