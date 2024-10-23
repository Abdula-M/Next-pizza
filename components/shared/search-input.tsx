'use client'

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { useDebounce } from "react-use";


interface Props {
    className?: string;
}


export const SearchInput: React.FC<Props> = ({className}) => {
    const [searchQuery, setSearchQuery] = React.useState('')
    const [products, setProducts] = React.useState<Product[]>([])
    const [focuced, setFocused] = React.useState(false)
    useDebounce(() => {
        Api.products.search(searchQuery).then(items => setProducts(items))
    }, 250, [searchQuery])

    const onClickItem = () => {
        setFocused(false)
        setSearchQuery('')
        setProducts([])
    }

    return (
        <>
            {focuced && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"
                              onClick={() => setFocused(false)}/>}
            <div className={cn("flex rounded-2xl flex-1 justify-between relative h-11 z-30", className)}>
                <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400"/>
                <input
                    className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
                    type="text"
                    placeholder="Найти пиццу"
                    onFocus={() => setFocused(true)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}/>
                <div className={cn("absolute w-full bg-white rounded-xl py-2 px-3 top-12 shadow-md transition-all duration-0 invisible opacity-200 z-30",
                    focuced && "visible opacity-100 top-12 duration-200"
                )}> 
                    {
                        products.length > 0 ? products.map(product => (
                            <Link onClick={onClickItem} key={product.id} href={`/api/product/${product.id}`}>
                                <div className="flex items-center hover:bg-primary/10 rounded-xl">
                                    <img className="rounded-sm h-8 w-8 " src={product.imageUrl} alt={product.name}/>
                                    <div className="px-3 py-2 ">{product.name}</div>
                                </div>
                            </Link>
                        ))
                        : <div className="px-3 py-2">Ничего не найдено</div>
                    }
                </div>
            </div>

        </>
    )
}