import angular from "./assets/frontEnd/angular.svg";
import npm from "./assets/frontEnd/npm.svg";
import bootstrap from "./assets/frontEnd/bootstrap.svg";
import react from "./assets/frontEnd/react.svg";
import html from "./assets/frontEnd/html-5.svg";
import nodejs from "./assets/frontEnd/nodejs.svg";
import typescript from "./assets/frontEnd/typescript.svg";
import vuejs from "./assets/frontEnd/vuejs.svg";
import iOS from "./assets/devSoftware/apple.svg";
import android from "./assets/devSoftware/android.svg";
import flutterio from "./assets/devSoftware/flutterio-icon.svg";
import java from "./assets/devSoftware/java.svg";
import python from "./assets/devSoftware/python.png";
import cSharp from "./assets/devSoftware/c-sharp.png";
import swift from "./assets/devSoftware/swift.svg";
import pwa from "./assets/devSoftware/pwa.png";
import mariaDB from "./assets/database/mariadb.svg";
import mongodb from "./assets/database/mongodb.svg";
import redis from "./assets/database/redis.svg";
import mysql from "./assets/database/mysql.svg";
import postgresql from "./assets/database/postgresql.svg";
import oracle from "./assets/database/oracle.svg";
import sqlite from "./assets/database/sqlite.svg";
import aws from "./assets/database/aws-rds.svg";
import microsoft from "./assets/database/microsoft-access.svg";
import bigcommerce from "./assets/CRM/bigcommerce.png";
import wix from "./assets/CRM/wix.png";
import drupal from "./assets/CRM/drupal.svg";
import shopify from "./assets/CRM/shopify.svg";
import magento from "./assets/CRM/magento.svg";
import joomla from "./assets/CRM/joomla.svg";
import wooCommerce from "./assets/CRM/WooCommerce.png";
import wordpress from "./assets/CRM/wordpress.svg";


export type ImgFrontEnd = {
    backgroundImage: string
    backgroundSize: string
    backgroundPosition: string
    backgroundRepeat: string
}
export type DType={ title: string, img: ImgFrontEnd }
export type TechDataType = {[key:string]:DType[]}
const angularImg = {
    backgroundImage: 'url(' + angular + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

}
const npmImg = {
    backgroundImage: 'url(' + npm + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

}
const bootstrapImg = {
    backgroundImage: 'url(' + bootstrap + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

}
const reactImg = {
    backgroundImage: 'url(' + react + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

}
const htmlImg = {
    backgroundImage: 'url(' + html + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

}
const nodejsImg = {
    backgroundImage: 'url(' + nodejs + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

}
const typescriptImg = {
    backgroundImage: 'url(' + typescript + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'

}
const vuejsImg = {
    backgroundImage: 'url(' + vuejs + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}


export const techData: TechDataType = {
    ['frontend']:[
    {title: 'Angular.JS', img: angularImg},
    {title: 'React.JS', img: reactImg},
    {title: 'Npm', img: npmImg},
    {title: 'Typescript', img: typescriptImg},
    {title: 'HTML 5', img: htmlImg},
    {title: 'VUE.js', img: vuejsImg},
    {title: 'Bootstrap', img: bootstrapImg},
    {title: 'Node.JS', img: nodejsImg},
],
    ['developmentSoftware']:[
        {title: 'iOS', img: {backgroundImage: 'url(' + iOS + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'Android', img: {backgroundImage: 'url(' + android + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'Flutter', img: {backgroundImage: 'url(' + flutterio + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'Java', img: {backgroundImage: 'url(' + java + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'React Native', img: {backgroundImage: 'url(' + react + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'Python', img: {backgroundImage: 'url(' + python + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'C#', img: {backgroundImage: 'url(' + cSharp + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'Swift', img: {backgroundImage: 'url(' + swift + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'PWA', img: {backgroundImage: 'url(' + pwa + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
    ],
    ['dataBase']:[
        {title: 'mariaDB', img: {backgroundImage: 'url(' + mariaDB + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'MongoDb', img: {backgroundImage: 'url(' + mongodb + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'Redis', img: {backgroundImage: 'url(' + redis + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'mySQL', img: {backgroundImage: 'url(' + mysql + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'PostgreSQL', img: {backgroundImage: 'url(' + postgresql + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'Oracle', img: {backgroundImage: 'url(' + oracle + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'Sqlite', img: {backgroundImage: 'url(' + sqlite + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'AWS-RDS', img: {backgroundImage: 'url(' + aws + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'Microsoft-Access', img: {backgroundImage: 'url(' + microsoft + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},

    ],
    ['CMS']:[
        {title: 'Shopify', img: {backgroundImage: 'url(' + shopify + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'Magento', img: {backgroundImage: 'url(' + magento + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'WordPress', img: {backgroundImage: 'url(' + wordpress + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'Joomla', img: {backgroundImage: 'url(' + joomla + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'Drupal', img: {backgroundImage: 'url(' + drupal + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'Wix', img: {backgroundImage: 'url(' + wix + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'Big Commerce', img: {backgroundImage: 'url(' + bigcommerce + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
        {title: 'Woo Commerce', img: {backgroundImage: 'url(' + wooCommerce + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'}},
    ],}