export const UserSchemas: any = {
  name: 'User Schema',
  schemas: {
    schema: 'http://json-schema.org/draft-06/schema',
    type: 'object',
    properties: {
      "firstName": {
        "type": 'string'
      },
      "lastName": {
        "type": 'string'
      },
      "age": {
        "type": 'number',
        "minimum": 16,
        "maximum": 60
      },
      "mobileNo": {
        "type": 'number'
      },
    },
    "required": [
      "age",
      "mobileNo","firstName", "lastName"
    ],
    additionalProperties: false,

  },
  data: {
    "firstName": "Abhishek",
    "lastName": "Anand",
   
    // state: 'Gujurat'
  }
};
export const DarfSchemas: any = {
  name: 'User Schema',
  schemas: {
    schema: 'http://json-schema.org/draft-06/schema',
    type: 'object',
    properties: {
      "trnasTypLov": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "text": {
                "type": "string"
              },
              "value": {
                "type": "string"
              }
            },
            "required": [
              "text",
              "value"
            ]
          },
          {
            "type": "object",
            "properties": {
              "text": {
                "type": "string"
              },
              "value": {
                "type": "string"
              }
            },
            "required": [
              "text",
              "value"
            ]
          }
        ]
      },
      "drfDtls": {
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "drfCtrlId": {
                "type": "null"
              },
              "darfNum": {
                "type": "string"
              },
              "ordIncRefId": {
                "type": "integer"
              },
              "lnkdSatSnt": {
                "type": "null"
              },
              "lastOrdId": {
                "type": "integer"
              },
              "lastTraId": {
                "type": "null"
              },
              "lastRetId": {
                "type": "null"
              },
              "ognId": {
                "type": "integer"
              },
              "docId": {
                "type": "integer"
              },
              "locProtNo": {
                "type": "null"
              },
              "perId": {
                "type": "integer"
              },
              "agtId": {
                "type": "integer"
              },
              "frmId": {
                "type": "integer"
              },
              "strId": {
                "type": "integer"
              },
              "dispArea": {
                "type": "string"
              },
              "bottleSize": {
                "type": "string"
              },
              "patId": {
                "type": "null"
              },
              "routeAdmin": {
                "type": "null"
              },
              "dispensedAs": {
                "type": "string"
              },
              "totalPageNo": {
                "type": "null"
              },
              "startPageNumber": {
                "type": "integer"
              },
              "balFrwd": {
                "type": "integer"
              },
              "currBalance": {
                "type": "integer"
              },
              "currBalUnits": {
                "type": "string"
              },
              "status": {
                "type": "string"
              },
              "statusDate": {
                "type": "string"
              },
              "lstTransId": {
                "type": "null"
              },
              "lstTransDate": {
                "type": "null"
              },
              "lstPdfGeneDate": {
                "type": "null"
              },
              "lstPdfGenePages": {
                "type": "null"
              },
              "isBlinded": {
                "type": "string"
              },
              "drfType": {
                "type": "string"
              },
              "rcId": {
                "type": "null"
              },
              "moduleInitiated": {
                "type": "null"
              },
              "balFrwdUnits": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string"
                      },
                      "dispensedAs": {
                        "type": "string"
                      },
                      "action": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "name",
                      "value",
                      "dispensedAs",
                      "action"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string"
                      },
                      "dispensedAs": {
                        "type": "string"
                      },
                      "action": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "name",
                      "value",
                      "dispensedAs",
                      "action"
                    ]
                  }
                ]
              },
              "dispUnits": {
                "type": "string"
              },
              "pkgMultiplier": {
                "type": "integer"
              },
              "lastOliId": {
                "type": "integer"
              },
              "agent": {
                "type": "string"
              },
              "dose": {
                "type": "string"
              },
              "sbcId": {
                "type": "null"
              },
              "pcmIdEmail": {
                "type": "integer"
              },
              "pcmIdPhone": {
                "type": "integer"
              },
              "pcmEmail": {
                "type": "string"
              },
              "adsId": {
                "type": "integer"
              },
              "invPdpId": {
                "type": "integer"
              },
              "pcmPhone": {
                "type": "string"
              },
              "title": {
                "type": "string"
              },
              "protStatus": {
                "type": "string"
              },
              "siteStatus": {
                "type": "string"
              },
              "patientId": {
                "type": "null"
              },
              "padId": {
                "type": "integer"
              },
              "shipAddress": {
                "type": "string"
              },
              "investigator": {
                "type": "string"
              },
              "protocol": {
                "type": "string"
              },
              "patSpec": {
                "type": "string"
              },
              "navDrfType": {
                "type": "null"
              },
              "patientInitials": {
                "type": "null"
              },
              "pendTransGrid": {
                "type": "string"
              },
              "noAddressMessage": {
                "type": "null"
              },
              "nciSuppliedFlag": {
                "type": "string"
              },
              "site": {
                "type": "string"
              },
              "patient": {
                "type": "null"
              },
              "auditDate": {
                "type": "null"
              },
              "auditDone": {
                "type": "null"
              },
              "auditUser": {
                "type": "null"
              },
              "julianLotId": {
                "type": "null"
              },
              "linkedDarfCount": {
                "type": "integer"
              },
              "lotId": {
                "type": "null"
              },
              "orderNumber": {
                "type": "null"
              },
              "darfLinkIdnt": {
                "type": "string"
              },
              "action": {
                "type": "string"
              },
              "darfIdntType": {
                "type": "null"
              },
              "favorite": {
                "type": "string"
              },
              "letterDt": {
                "type": "array",
                "items": {}
              },
              "drfQuestions": {
                "type": "array",
                "items": {}
              },
              "drfAckQtn": {
                "type": "array",
                "items": {}
              },
              "rcdFrmNCICmmts": {
                "type": "array",
                "items": {}
              },
              "dispensingAreas": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "dispAreaId": {
                        "type": "integer"
                      },
                      "cntrlId": {
                        "type": "integer"
                      },
                      "name": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string"
                      },
                      "status": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "dispAreaId",
                      "cntrlId",
                      "name",
                      "value",
                      "status"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "dispAreaId": {
                        "type": "integer"
                      },
                      "cntrlId": {
                        "type": "integer"
                      },
                      "name": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string"
                      },
                      "status": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "dispAreaId",
                      "cntrlId",
                      "name",
                      "value",
                      "status"
                    ]
                  }
                ]
              },
              "siteAdminUrl": {
                "type": "string"
              },
              "dispAreaSts": {
                "type": "string"
              },
              "drfLtCrd": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer"
                      },
                      "drfId": {
                        "type": "integer"
                      },
                      "lstTransId": {
                        "type": "null"
                      },
                      "lotId": {
                        "type": "integer"
                      },
                      "lotNo": {
                        "type": "string"
                      },
                      "expDate": {
                        "type": "null"
                      },
                      "manufactId": {
                        "type": "integer"
                      },
                      "balance": {
                        "type": "integer"
                      },
                      "balUnits": {
                        "type": "string"
                      },
                      "ifLowBal": {
                        "type": "null"
                      },
                      "stockRecLtr": {
                        "type": "null"
                      },
                      "comments": {
                        "type": "null"
                      },
                      "lstRecUsr": {
                        "type": "string"
                      },
                      "lstRecDate": {
                        "type": "string"
                      },
                      "julianLot": {
                        "type": "null"
                      },
                      "julianLotId": {
                        "type": "null"
                      },
                      "expDateAddBy": {
                        "type": "null"
                      },
                      "reservedQuantity": {
                        "type": "null"
                      },
                      "lastTrans": {
                        "type": "null"
                      },
                      "usebydateHover": {
                        "type": "null"
                      },
                      "lot": {
                        "type": "string"
                      },
                      "bal": {
                        "type": "string"
                      },
                      "reservedUnits": {
                        "type": "null"
                      },
                      "iconHover": {
                        "type": "null"
                      },
                      "mnfr": {
                        "type": "string"
                      },
                      "transDate": {
                        "type": "null"
                      },
                      "hasPending": {
                        "type": "boolean"
                      },
                      "action": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "id",
                      "drfId",
                      "lstTransId",
                      "lotId",
                      "lotNo",
                      "expDate",
                      "manufactId",
                      "balance",
                      "balUnits",
                      "ifLowBal",
                      "stockRecLtr",
                      "comments",
                      "lstRecUsr",
                      "lstRecDate",
                      "julianLot",
                      "julianLotId",
                      "expDateAddBy",
                      "reservedQuantity",
                      "lastTrans",
                      "usebydateHover",
                      "lot",
                      "bal",
                      "reservedUnits",
                      "iconHover",
                      "mnfr",
                      "transDate",
                      "hasPending",
                      "action"
                    ]
                  }
                ]
              },
              "drfTrans": {
                "type": "array",
                "items": {}
              },
              "pndTrans": {
                "type": "array",
                "items": {}
              },
              "controlData": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "field": {
                        "type": "string"
                      },
                      "url": {
                        "type": "array",
                        "items": [
                          {
                            "type": "object",
                            "properties": {
                              "text": {
                                "type": "string"
                              },
                              "value": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "text",
                              "value"
                            ]
                          },
                          {
                            "type": "object",
                            "properties": {
                              "text": {
                                "type": "string"
                              },
                              "value": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "text",
                              "value"
                            ]
                          },
                          {
                            "type": "object",
                            "properties": {
                              "text": {
                                "type": "string"
                              },
                              "value": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "text",
                              "value"
                            ]
                          },
                          {
                            "type": "object",
                            "properties": {
                              "text": {
                                "type": "string"
                              },
                              "value": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "text",
                              "value"
                            ]
                          },
                          {
                            "type": "object",
                            "properties": {
                              "text": {
                                "type": "string"
                              },
                              "value": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "text",
                              "value"
                            ]
                          },
                          {
                            "type": "object",
                            "properties": {
                              "text": {
                                "type": "string"
                              },
                              "value": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "text",
                              "value"
                            ]
                          },
                          {
                            "type": "object",
                            "properties": {
                              "text": {
                                "type": "string"
                              },
                              "value": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "text",
                              "value"
                            ]
                          },
                          {
                            "type": "object",
                            "properties": {
                              "text": {
                                "type": "string"
                              },
                              "value": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "text",
                              "value"
                            ]
                          }
                        ]
                      }
                    },
                    "required": [
                      "field",
                      "url"
                    ]
                  }
                ]
              }
            },
            "required": [
              "id",
              "drfCtrlId",
              "darfNum",
              "ordIncRefId",
              "lnkdSatSnt",
              "lastOrdId",
              "lastTraId",
              "lastRetId",
              "ognId",
              "docId",
              "locProtNo",
              "perId",
              "agtId",
              "frmId",
              "strId",
              "dispArea",
              "bottleSize",
              "patId",
              "routeAdmin",
              "dispensedAs",
              "totalPageNo",
              "startPageNumber",
              "balFrwd",
              "currBalance",
              "currBalUnits",
              "status",
              "statusDate",
              "lstTransId",
              "lstTransDate",
              "lstPdfGeneDate",
              "lstPdfGenePages",
              "isBlinded",
              "drfType",
              "rcId",
              "moduleInitiated",
              "balFrwdUnits",
              "dispUnits",
              "pkgMultiplier",
              "lastOliId",
              "agent",
              "dose",
              "sbcId",
              "pcmIdEmail",
              "pcmIdPhone",
              "pcmEmail",
              "adsId",
              "invPdpId",
              "pcmPhone",
              "title",
              "protStatus",
              "siteStatus",
              "patientId",
              "padId",
              "shipAddress",
              "investigator",
              "protocol",
              "patSpec",
              "navDrfType",
              "patientInitials",
              "pendTransGrid",
              "noAddressMessage",
              "nciSuppliedFlag",
              "site",
              "patient",
              "auditDate",
              "auditDone",
              "auditUser",
              "julianLotId",
              "linkedDarfCount",
              "lotId",
              "orderNumber",
              "darfLinkIdnt",
              "action",
              "darfIdntType",
              "favorite",
              "letterDt",
              "drfQuestions",
              "drfAckQtn",
              "rcdFrmNCICmmts",
              "dispensingAreas",
              "siteAdminUrl",
              "dispAreaSts",
              "drfLtCrd",
              "drfTrans",
              "pndTrans",
              "controlData"
            ]
          }
        ]
      }
    },
    "required": [
      "trnasTypLov",
      "drfDtls"
    ],
    additionalProperties: false,

  },
  data: {
    "trnasTypLov": [
      {
        "text": "Adjustment",
        "value": "Adjustment"
      },
      {
        "text": "Inventory Verification",
        "value": "Inventory Verification"
      }
    ],
    "ExtraTestData":{},
    "drfDtls": [
      {
        // "id": '13023',
        "id": 13023,
        "drfCtrlId": null,
        "darfNum": "C-MN026-7627-007",
        "ordIncRefId": 300146,
        "lnkdSatSnt": null,
        "lastOrdId": 2353613,
        "lastTraId": null,
        "lastRetId": null,
        "ognId": 84089,
        "docId": 144688,
        "locProtNo": null,
        "perId": 69443,
        "agtId": 3943,
        "frmId": 1396,
        "strId": 1746,
        "dispArea": "Disp1",
        "bottleSize": "68 Tablets/Bottle",
        "patId": null,
        "routeAdmin": null,
        "dispensedAs": "partial",
        "totalPageNo": null,
        "startPageNumber": 1,
        "balFrwd": 0,
        "currBalance": 0,
        "currBalUnits": "tablets",
        "status": "Open",
        "statusDate": "12-Aug-2019",
        "lstTransId": null,
        "lstTransDate": null,
        "lstPdfGeneDate": null,
        "lstPdfGenePages": null,
        "isBlinded": "no",
        "drfType": "CONTROL",
        "rcId": null,
        "moduleInitiated": null,
        "balFrwdUnits": [
          {
            "name": "tablets",
            "value": "tablets",
            "dispensedAs": "partial",
            "action": "N"
          },
          {
            "name": "bottle",
            "value": "bottle",
            "dispensedAs": "full",
            "action": "N"
          }
        ],
        "dispUnits": "tablets,bottle",
        "pkgMultiplier": 68,
        "lastOliId": 2912668,
        "agent": "Pazopanib (GW786034) (NSC-737754)",
        "dose": "400 mg Tablets",
        "sbcId": null,
        "pcmIdEmail": 1348801,
        "pcmIdPhone": 1348802,
        "pcmEmail": "ppatel@ctis1montefiore.org",
        "adsId": 154435,
        "invPdpId": 106297,
        "pcmPhone": "(718) 405-8510",
        "title": "A Phase II Study of GW 786034 (Pazopanib) in Advanced Thyroid Cancer",
        "protStatus": "Closed to Accrual",
        "siteStatus": "Active",
        "patientId": null,
        "padId": 1132230,
        "shipAddress": "Pharmacy Department, 200 First Street Southwest, Gonda 10-178, Rochester MN 55905, USA",
        "investigator": "Bible, Keith (26017)",
        "protocol": "7627",
        "patSpec": "no",
        "navDrfType": null,
        "patientInitials": null,
        "pendTransGrid": "false",
        "noAddressMessage": null,
        "nciSuppliedFlag": "Yes",
        "site": "Mayo Clinic -01 (MN026)",
        "patient": null,
        "auditDate": null,
        "auditDone": null,
        "auditUser": null,
        "julianLotId": null,
        "linkedDarfCount": 1,
        "lotId": null,
        "orderNumber": null,
        "darfLinkIdnt": "View",
        "action": "N",
        "darfIdntType": null,
        "favorite": "unlinked",
        "letterDt": [],
        "drfQuestions": [],
        "drfAckQtn": [],
        "rcdFrmNCICmmts": [],
        "dispensingAreas": [
          {
            "dispAreaId": 534,
            "cntrlId": 54,
            "name": "Disp1",
            "value": "Disp1",
            "status": "Active"
          },
          {
            "dispAreaId": 533,
            "cntrlId": 54,
            "name": "Disp3",
            "value": "Disp3",
            "status": "Active"
          }
        ],
        "siteAdminUrl": "accountability/site admin maintenance",
        "dispAreaSts": "",
        "drfLtCrd": [
          {
            "id": 164220,
            "drfId": 13023,
            "lstTransId": null,
            "lotId": 11184,
            "lotNo": "152393808",
            "expDate": null,
            "manufactId": 10259,
            "balance": 0,
            "balUnits": "tablets",
            "ifLowBal": null,
            "stockRecLtr": null,
            "comments": null,
            "lstRecUsr": "OAOPUSER",
            "lstRecDate": "12-Aug-0019",
            "julianLot": null,
            "julianLotId": null,
            "expDateAddBy": null,
            "reservedQuantity": null,
            "lastTrans": null,
            "usebydateHover": null,
            "lot": "152393808",
            "bal": "0 tablets",
            "reservedUnits": null,
            "iconHover": null,
            "mnfr": "GlaxoSmithKline (GLX)",
            "transDate": null,
            "hasPending": false,
            "action": "N"
          }
        ],
        "drfTrans": [],
        "pndTrans": [],
        "controlData": [
          {
            "field": "transaction",
            "url": [
              {
                "text": "Received from NCI",
                "value": "https://iappsdev.ctisinc.com/sso-web/validatePassThrough.action?acl\u003dhttps://ctepcoredev.ctisinc.com/OAOP/IAMSSOResponseServlet\u0026relayState\u003dvieworder_ordId\u003dordId_ordType\u003dorderType"
              },
              {
                "text": "Sent to Satellite",
                "value": "sts\u003cplaceholder\u003evieworder_ordId\u003dordId_ordType\u003dorderType"
              },
              {
                "text": "Returned from Satellite",
                "value": "rfs\u003cplaceholder\u003evieworder_ordId\u003dordId_ordType\u003dorderType"
              },
              {
                "text": "Sent to Control",
                "value": "stc\u003cplaceholder\u003evieworder_ordId\u003dordId_ordType\u003dorderType"
              },
              {
                "text": "Returned to Control",
                "value": "rtc\u003cplaceholder\u003evieworder_ordId\u003dordId_ordType\u003dorderType"
              },
              {
                "text": "Local Destruction",
                "value": "ld\u003cplaceholder\u003evieworder_ordId\u003dordId_ordType\u003dorderType"
              },
              {
                "text": "Transfer To",
                "value": "tt\u003cplaceholder\u003evieworder_ordId\u003dordId_ordType\u003dorderType"
              },
              {
                "text": "Transfer From",
                "value": "tf\u003cplaceholder\u003evieworder_ordId\u003dordId_ordType\u003dorderType"
              }
            ]
          }
        ]
      }
    ]
  }
};
