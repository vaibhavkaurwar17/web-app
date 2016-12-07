module.exports = function(client) {

  client.query(`CREATE TABLE doctor__c (
   id SERIAL NOT NULL,
   sfid CHARACTER VARYING(18) UNIQUE,
   name CHARACTER VARYING(80),
   email__c CHARACTER VARYING(80),
   mobile__c CHARACTER VARYING(40),
   specialization__c CHARACTER VARYING(80),
   picture__c CHARACTER VARYING(255),
   hospital__c  CHARACTER VARYING(18) REFERENCES hospital__c(sfid)
  );`);

  client.query(`CREATE TABLE hospital__c (
   id SERIAL NOT NULL,
   sfid CHARACTER VARYING(18) UNIQUE,
   name CHARACTER VARYING(80),
   thumbnail__c CHARACTER VARYING(255),
   features__c CHARACTER VARYING(500),
   city__c CHARACTER VARYING(50),
   address__c CHARACTER VARYING(255),
   picture__c CHARACTER VARYING(255),
   location__longitude__s DOUBLE PRECISION,
   location__latitude__s DOUBLE PRECISION
  );`);

  client.query(`CREATE TABLE favourite__c (
   id SERIAL NOT NULL,
   sfid CHARACTER VARYING(18) UNIQUE,
   hospital__c  CHARACTER VARYING(18) REFERENCES hospital__c(sfid)
  );`);


  client.query(`INSERT INTO doctor__c (email__c, mobile__c, name,  sfid, specialization__c, picture__c) VALUES ('caroline@ionicrealty.com', '617-244-3672', 'Caroline Kingsley', '617-244-3672', 'a0036000003SsJwAAK', 'Senior Broker', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg');`);
  
  client.query(`INSERT INTO hospital__c (name, thumbnail__c,  location__longitude__s, address__c, description__c, sfid, city__c, title__c, picture__c, location__latitude__s) VALUES ('18 Henry st', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house01sq.jpg', 4, -71.1109500000000025, '18 Henry st', 3, 'a0036000003SsJwAAK', 'Lorem ipsum dolor sit amet', 'a0236000002NHKoAAO', 'MA', 'Cambridge', '01742', 'Stunning Victorian', 'https://s3-us-west-1.amazonaws.com/sfdc-demo/realty/house01.jpg', 975000, 42.3566300000000027);`);
  
  client.query(`INSERT INTO favourite__c (hospital__c, sfid) VALUES ('a0236000002NHKoAAO', 'a0136000003SsewAAC');`);

};