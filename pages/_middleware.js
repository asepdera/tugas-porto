import {NextResponse} from 'next/server'
import Redirect from 'next/router'

export const middleware = (req) => {
    if(req.query != '/') return Redirect('/')
}