import login from "@/components/login";
import main from "@/components/main";
import header from "@/components/about/header";
import content from "@/components/about/content";
import LeftMenu from "@/components/about/LeftMenu";
import homePage from "@/components/home/homePage";
import activity from "@/components/home/activity";
import briefIntroduction from "@/components/home/briefIntroduction";
import FinancingProgressRanking from "@/components/proposedInvestment/FinancingProgressRanking";
import ProjectPool from "@/components/proposedInvestment/ProjectPool";
import RankingFinancingPopularity from "@/components/proposedInvestment/RankingFinancingPopularity";
// import InvestmentMatching from "@/components/user/InvestmentMatching";
import MyInformation from "@/components/user/MyInformation";
// import MyPosition from "@/components/user/MyPosition";
import aboutUs from "@/components/aboutUs/aboutUs";

export const routes= [
    {path:"/header",component:header,name:"主页"},
    {path:"/content",component:content,name:"中心"},
    {path:"/",component:login,hidden: true},
    {path:"/LeftMenu",component:LeftMenu},
    // {path: "*",redirect: login}
    // {path:"/login",component:login,hidden:true},
    {path:"/main",component:main,name:"主页",children:[
            {path:"/xqt/homePage",component:homePage,name:"主页"},
            {path:"/xqt/activity",component:activity,name:"活跃度"},
            {path:"/xqt/briefIntroduction",component:briefIntroduction,name:"简介"},
            {path:"/xqt/FinancingProgressRanking",component:FinancingProgressRanking,name:"融资进度排行"},
            {path:"/xqt/ProjectPool",component:ProjectPool,name:"项目池"},
            {path:"/xqt/RankingFinancingPopularity",component:RankingFinancingPopularity,name:"融资热度排行"},
            // {path:"/xqt/InvestmentMatching",component:InvestmentMatching,name:"我的持仓"},
            {path:"/xqt/MyInformation",component:MyInformation,name:"我的信息"},
            // {path:"/xqt/MyPosition",component:MyPosition,name:"投资匹配"},
            {path:"/xqt/aboutUs",component:aboutUs,name:"关于我们"},
        ]},

]
