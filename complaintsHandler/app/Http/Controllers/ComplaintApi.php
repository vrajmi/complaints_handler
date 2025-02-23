<?php

namespace App\Http\Controllers;

use App\Models\complaintModel;
use Illuminate\Http\Request;

class ComplaintApi extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $complaint = complaintModel::all();

        return response()->json($complaint);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $complaint = complaintModel::find($id);
        if (empty($complaint)) {
            return response()->json(["message" => "Complaint not found!"], 404);
        } else {
            return response()->json($complaint);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $complaint = complaintModel::find($id);
        if (empty($complaint)) {
            return response()->json(["message" => "Complaint not found!"], 404);
        } else {
            return response()->json(["message" => "Complaint deleted!"], 202);
        }
    }
}
