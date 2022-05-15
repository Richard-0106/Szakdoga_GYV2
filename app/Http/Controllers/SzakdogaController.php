<?php

namespace App\Http\Controllers;

use App\Models\Szakdoga;
use Illuminate\Http\Request;

class SzakdogaController extends Controller
{
    public function index()
    {

        return Szakdoga::get();
    }
    public function store(Request $request)
    {
        
           
        return Szakdoga::create($request->all());
            
    }
    public function destroy($id)
    {
        $szakdoga = Szakdoga::find($id);
        $szakdoga->delete();
        return ['message' => 'Törölve'];
    }
    public function update(Request $request, $id)
    {
        $szakdoga = Szakdoga::find($id);
        $request->validate([
            'szakdoga_ nev' => 'required',
        ]);

        $szakdoga->update($request->all());
        return $szakdoga;
    }
}
