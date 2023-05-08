import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc, collection, getDocs } from 'firebase/firestore'
import { db } from '~/services/lib/firebase'

import { FirebasePath } from '~/services/lib/constants'
// import {ServiceProvider} from "~/components/types/user";
import { Service } from '~/services/types/service'
import CommentCreator from '~/components/Creator/CommentCreator'
import CommentsList from './Comments/CommentsListPage'
import RequestCreator from '~/components/Creator/RequestCreator'
import Page from '~/components/Page/Page'

const ServiceDetail: React.FC = () => {
    const { serviceId } = useParams<{ serviceId: string }>()
    const [service, setService] = useState<Service | null>(null)

    useEffect(() => {
        const fetchService = async () => {
            if (!serviceId) return
            const serviceDoc = await getDoc(doc(db, FirebasePath.SERVICE, serviceId))
            if (serviceDoc.exists()) {
                const data = serviceDoc.data() as Service
                setService(data)
            }
        }

        fetchService()
    }, [serviceId])

    if (!service) {
        return <div>Loading...</div>
    }

    return (
        <Page>
            <div className='container flex flex-col items-center px-5 py-16 mx-auto  md:flex-row lg:px-28 shadow-xl bg-base-100'>
                <div className='flex flex-col items-start w-full pt-0 mb-16 text-left  lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0'>
                    <h1 className='mb-8 text-2xl font-black tracking-tighter text-black  md:text-5xl title-font'>
                        {' '}
                        {service.name}{' '}
                    </h1>

                    <h3 className='text-1xl md:text-3xl font-bold dark:text-white'>Price</h3>
                    <p className='mb-8 text-base leading-relaxed text-left text-blueGray-600'>
                        {' '}
                        {'£' + service.price + ' per hour'}{' '}
                    </p>

                    <h3 className='text-1xl md:text-3xl font-bold dark:text-white'>Description</h3>
                    <p className='mb-8 text-base leading-relaxed text-left text-blueGray-600'>
                        {' '}
                        {service.description}{' '}
                    </p>

                    <h3 className='text-1xl md:text-3xl font-bold dark:text-white'>Cover Area</h3>
                    <p className='mb-8 text-base leading-relaxed text-left text-blueGray-600'> {service.coverArea} </p>

                    <h3 className='text-1xl md:text-3xl font-bold dark:text-white'>Available TIME</h3>
                    <p className='mb-8 text-base leading-relaxed text-left text-blueGray-600'> {service.time} </p>
                    <div className='flex flex-col w-full gap-2 md:justify-start md:flex-row'>
                        {/*<input*/}
                        {/*    className="flex-grow w-full px-4 py-3 mb-4 text-base text-black transition ease-in-out transform rounded-lg  duration-650 lg:w-auto bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"*/}
                        {/*    placeholder="Your Email" type="email" />*/}
                        {serviceId && (
                            <>
                                <div>
                                    <RequestCreator serviceId={serviceId} />
                                </div>
                            </>
                        )}
                    </div>
                    {/*<p className="w-full mt-2 mb-8 text-sm text-left text-blueGray-600"> I got 99 problems and blocks*/}
                    {/*    ain one. </p>*/}
                </div>
                <div className='w-full lg:w-5/6 lg:max-w-lg md:w-1/2'>
                    <img className='object-cover object-center rounded-lg' src={service.image} alt={service.name} />
                </div>
            </div>
            {serviceId && (
                <>
                    <div className='container grid grid-col-1 items-center px-5 py-2 mx-auto my-5 md:flex-row lg:px-28 shadow-xl bg-base-100'>
                        <div>
                            Comment
                        </div>
                        <div className='w-full'>
                            <CommentsList serviceId={serviceId} />
                        </div>
                    </div>
                </>
            )}
        </Page>
    )
}

export default ServiceDetail
