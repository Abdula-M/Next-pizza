import { cn } from '@/lib/utils';
import { Container } from './index';
import { Button,  } from '../ui/index';
import {User, ShoppingCart, ArrowRight} from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { SearchInput } from './index';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
               <Link href='/'>
                    <div className='flex items-center gap-4'>
                        <Image src="/logo.png" alt="Logo" width={40} height={40}/>
                        <div>
                            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                            <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
                        </div>
                    </div>
               </Link>

                <div className='mx-10 flex-1'>
                    <SearchInput/>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline" className='flex items-center gap-1' >
                         <User size={16}/>
                         Войти
                    </Button>

                    <div>
                        <Button className="group relative">
                            <b>520 ₽</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3" />
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                                <b>3</b>
                            </div>
                        </Button>
                        <ArrowRight size={20} className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                </div>
            </Container>
        </header>
    )
}