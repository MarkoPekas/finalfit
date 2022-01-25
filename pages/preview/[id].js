import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import jsondata from "../data.json"


export const getStaticPaths = async () => {
    return {
        paths: [
            {  params: { id: 'todoroki' } },
            {  params: { id: 'bakugo' } },
            {  params: { id: 'ochako' } },
            {  params: { id: 'wrath' } },
            {  params: { id: 'greed' } },
            {  params: { id: 'envy' } },
            {  params: { id: 'sloth' } },
            {  params: { id: 'lust' } },
            {  params: { id: 'gluttony' } },
            {  params: { id: 'pride' } },
            {  params: { id: 'naruto' } },
            {  params: { id: 'sakura' } },
            {  params: { id: 'sasuke' } },
            {  params: { id: 'kakashi' } },
            {  params: { id: 'rocklee' } },
            {  params: { id: 'hinata' } },
            {  params: { id: 'kageyama' } },
            {  params: { id: 'bleach' } },
            {  params: { id: 'mikasa' } },
            {  params: { id: 'ippo' } },
            {  params: { id: 'saiki' } },
            {  params: { id: 'onepunch' } },
            {  params: { id: 'deku' } },
            {  params: { id: 'goku' } },
            {  params: { id: 'demonslayer' } },
            {  params: { id: 'aot' } },
            {  params: { id: 'hunter' } },
            {  params: { id: 'onepiece' } },
            {  params: { id: 'jojo' } },
            {  params: { id: 'baki' } },
            {  params: { id: 'asta' } },
        ],
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    return {props: context.params};
}
export default function Preview(req) {    

    const router = useRouter()

    let workouts = jsondata.characters[req.id].workout;
    let wrows = [];
    let trows = [];
    if(req.id!=="noone"){
        for (let i = 0; i < workouts.length; i++){
            trows.push(
                <div className="w-full px-5 py-2 flex">
                    <div className="w-24 h-24 bg-center bg-cover rounded-xl border" style={{backgroundImage: `url(${"/images/"+workouts[i][0].replace(/\s/g, '').toLowerCase()+".gif"})`}}>

                    </div>
                    <div className="flex flex-col justify-center px-3">
                        <p className="text-lg font-medium">{workouts[i][0]}</p>
                        <p className="text-base text-gray-500">{workouts[i][1]} <span>{workouts[i][2]}</span></p>
                    </div>
                </div>
            )
        
        wrows.push(
            <div className="w-24 inline-block m-2 bg-center bg-cover ">
            <div className="w-24 h-24 inline-block bg-center bg-cover rounded shadow" style={{backgroundImage: `url(${"/images/"+workouts[i][0].replace(/\s/g, '').toLowerCase()+".gif"})`}}>
            <div className="w-full h-full flex p-2">
                
            </div>
            </div>
            <p className="text-center dark:text-gray-50" >{ workouts[i][1] + " " +  workouts[i][2]}</p>
            </div>
        );
        }
    }



    return(
        <div className="flex flex-col">
            <div className=" w-full h-40 bg-cover bg-center" style={{backgroundImage: `url(${jsondata.characters[req.id].img})`}}></div>
            <h1 className="text-3xl font-medium text-gray-900 px-5">{jsondata.characters[req.id].name}</h1>
            <div className="flex px-5 py-2">
            {jsondata.characters[req.id].tags.map((tag, index) => {
                return(
                    <div className="flex justify-center px-5 py-2 bg-gray-100 rounded-xl">
                        <p className="text-xs font-medium text-gray-700">{tag}</p>
                    </div>
                )
            })}
            </div>
            <div className="flex justify-center p-5">
                <button onClick={() => router.push('/workout/'+req.id)} className="px-14 py-3 bg-sexyblue shadow-xl text-white rounded">BEGIN</button>
            </div>
            <p className="px-5 font-semibold">Preview</p>
            {trows}
        </div>
    )

}